import styles from './Cart.module.css';
import { useOutletContext } from 'react-router-dom';
import CartItem from '../../components/CartItem/CartItem';

const Cart = () => {
	const { cartItems, updateQuantity, removeFromCart } = useOutletContext();
	return (
		<>
			<section>
				<h1>Cart</h1>
				<h2>Voici ce que contient votre caddie: </h2>
				{cartItems.map((item) => (
					<CartItem key={item.id} item={item} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
				))}
			</section>
		</>
	);
};

export default Cart;
