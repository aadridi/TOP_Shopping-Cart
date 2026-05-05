import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = ({ cartItems }) => {
	const totalItems = cartItems.reduce((sum, currentItem) => sum + (currentItem.quantity || 0), 0);

	return (
		<div className={styles.navbar}>
			<div>Logo</div>

			<div className={styles.navLinks}>
				<Link to='/'>Home</Link>
				<Link to='/shop'>Shop</Link>
				<Link to='/cart'>Cart ({totalItems || 0})</Link>
			</div>
		</div>
	);
};

export default Navbar;
