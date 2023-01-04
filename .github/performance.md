## Perfomance

1.  Criar uma nova versão do componente
2.  Comparar com a versão anterior
3.  Se houverem alterações, vai atualizar o que alterou

### igualdade referencial
A igualdade referencial é quando você quer comparar se um objeto é o mesmo, e não exatamente se o seu valor é o mesmo.

No caso do React, o que o useCallback, por exemplo, faz, é garantir essa igualdade referencial entre todas as renderizações para que em todas as renderizações ele sempre aponte para o mesmo "objeto" e assim evite renderizações desnecessárias principalmente quando passamos essas funções como propriedade para outros componentes. 🚀

## Quando usar o MEMO

1.  Pure functional Components
2.  Render too often
3.  Re-renders with same props
4.  Medium to big size app

## useMemo

Tem apenas uma unica funcionalidade, evitar que algo que ocupe muito processamento seja renderizado.

1.  Usado para calculos pesados
2.  Igualdade referencial (quando a gente passar aquela informação para um componente filho)

## useCallback

Memorizar uma função e não o valor.

As funções não se atualizam, mas elas são recriadas em memória a cada renderização e por isso quando repassamos funções para os componentes filhos os componentes filhos vão achar que é uma "outra função", pois ela não possui igualdade referencial em memória.

O que o useCallback faz é justamente resolver esse problema "memorizando" a função em memória até que uma das dependencias dela mude, assim evitando que o componente filho renderize a cada renderização do componente pai por conta dessa função, somente quando realmente necessário. 🚀


## Dynamic import (Code Splitting)

Importar o component quando for usado.

#### Lazy loading

### Importar a lib quando for utilizado. exemplo

~~~~ts
  async function showFormattedDate() {
    const {format} = await import('date-fns')

    format()
  }
~~~~

### Bundle Analyzer
yarn add cross-env -D
yarn add @next/bundle-analyzer

https://github.com/josselinbuils/next-bundle-analyzer