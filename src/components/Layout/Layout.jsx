import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';

const Layout = ({ addToCart, cartItems, updateQuantity, removeFromCart }) => {
	return (
		<div className={styles.container}>
			<header className={styles.navbar}>
				<Navbar cartItems={cartItems} />
			</header>

			<aside className={styles.sidebar}>
				<Sidebar />
			</aside>

			<main className={styles.main}>
				<Outlet context={{ addToCart, cartItems, updateQuantity, removeFromCart }} />
			</main>

			<footer className={styles.footer}>
				<Footer />
			</footer>
		</div>
	);
};

export default Layout;
