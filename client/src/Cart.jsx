import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { product: { id: 1, name: 'Product 1' }, quantity: 2 }
  ]);

  // Replace with API call to fetch cart items from backend
  // const fetchCartItems = async () => {
  //   const response = await fetch('/api/cart');
  //   const data = await response.json();
  //   setCartItems(data);
  // };

  // useEffect(() => {
  //   fetchCartItems();
  // }, []);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map(cartItem => (
          <li key={cartItem.product.id}>
            <p>{cartItem.product.name} ({cartItem.quantity})</p>
            {/* Implement quantity buttons and remove button here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
