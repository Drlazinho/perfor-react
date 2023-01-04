import dynamic from 'next/dynamic';
import { memo, useState } from 'react'
import { AddProductToWhishList, AddProductToWishListProps } from './AddProductToWishList';

const AddProductToWishlist = dynamic<AddProductToWishListProps>(() => {
 return import('./AddProductToWishList').then(mod => mod.AddProductToWhishList)
}, {
  loading: () => <span>Carregando</span>
})
// const AddProductToWishlist = dynamic(() => {
//   import('./AddProductToWishList')
// }) / export default

interface ProductItemProps {
  product: {
    id: number
    price: number
    priceFormatted: string;
    title: string
  }
  onAddToWishList: (id: number) => void
}

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false)

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>Adicionar aos favoritos</button>
    {isAddingToWishlist &&     <AddProductToWhishList
      onAddToWishList={() => onAddToWishList(product.id)}
      onRequestClose={() => onAddToWishList(product.id)}
    />}
    </div>
  )
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps, nextProps) //conteudo simples
  }
)
