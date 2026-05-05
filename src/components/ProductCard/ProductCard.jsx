import styles from './ProductCard.module.css';

const ProductCard = ({ item, addToCart }) => {
	return (
		<div className={styles.cardContainer}>
			<div className={styles.cardImageContainer}>
				<img className={styles.cardImage} src={item.image} alt={`Image of ${item.title}`} />
			</div>
			<div className={styles.cardText}>
				<h3>{item.title}</h3>
				<p>{item.description.slice(0, 100) + '...'}</p>
			</div>
			<div className={styles.cardFooter}>
				<p>Prix : {item.price} €</p>
				<button onClick={() => addToCart(item)}>Add To Cart</button>
			</div>
		</div>
	);
};

export default ProductCard;
