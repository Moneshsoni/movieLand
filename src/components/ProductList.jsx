import React from 'react'

const ProductList = () => {
  const products = [{ title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },];

  const listItem = products.map(product =><li key={product.id}>
    {product.title}
  </li>)
  return (
    <div>
      <ul>{listItem}</ul>
    </div>
  )
}

export default ProductList
