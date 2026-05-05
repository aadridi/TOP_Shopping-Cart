import './App.css';
import Layout from '../src/components/Layout/Layout';
import { useState } from 'react';

const App = () => {
	const [cartItems, setCartItems] = useState([]);

	const addToCart = (product) => {
		setCartItems((prevCartItems) => {
			const itemInCart = prevCartItems.find((cartItem) => cartItem.id === product.id);
			if (itemInCart) {
				// update quantity
				return prevCartItems.map((cartItem) => {
					if (cartItem.id === product.id) {
						return { ...cartItem, quantity: cartItem.quantity + 1 };
					} else {
						return cartItem;
					}
				});
			} else {
				// add new item
				return [...prevCartItems, { ...product, quantity: 1 }];
			}
		});
		console.log('You added a product to the cart');
	};

	return (
		<>
			<Layout addToCart={addToCart} cartItems={cartItems} />
		</>
	);
};

export default App;
