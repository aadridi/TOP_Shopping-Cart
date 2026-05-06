import styles from './CartItem.module.css';

const CartItem = ({ item, updateQuantity, removeFromCart }) => {
	return (
		<div className={styles.cardContainer}>
			<div className={styles.cardImageContainer}>
				<img className={styles.cardImage} src={item.image} alt={`Image of ${item.title}`} />
			</div>
			<div className={styles.cardText}>
				<h3>{item.title}</h3>
				<p className={styles.cardTextQuantity}> Quantity : {item.quantity}</p>
			</div>
			<div className={styles.cardFooter}>
				<p>Prix : {item.price} €</p>
				<div className={styles.itemQuantity}>
					<button onClick={() => updateQuantity(item, -1)} disabled={item.quantity === 1}>
						-
					</button>
					<button onClick={() => removeFromCart(item.id)}>Delete</button>
					<button onClick={() => updateQuantity(item, +1)}>+</button>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
