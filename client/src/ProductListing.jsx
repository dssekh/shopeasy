import React, { useState } from 'react';

const ProductListing = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 }
  ]);

  // Replace with API call to fetch products from backend
  // const fetchProducts = async () => {
  //   const response = await fetch('/api/products');
  //   const data = await response.json();
  //   setProducts(data);
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <p>{product.name}</p>
            <button onClick={() => console.log('Add to cart:', product.id)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListing;
