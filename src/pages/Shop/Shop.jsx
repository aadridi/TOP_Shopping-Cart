import useProducts from '../../hooks/useProducts';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useOutletContext } from 'react-router-dom';

const Shop = () => {
	const { products, error, loading } = useProducts();
	const { addToCart, cartItems } = useOutletContext();

	if (loading) return <p>Loading...</p>;
	if (error) return <p>A network error was encountered : {error.message}</p>;

	return (
		<>
			<div>Shop</div>
			<h1>Voici les produits que nous avons à disposition pour vous cette semaine:</h1>
			{products.map((item) => (
				<ProductCard key={item.id} item={item} addToCart={addToCart} />
			))}
		</>
	);
};

export default Shop;
