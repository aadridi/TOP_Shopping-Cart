import { useState, useEffect } from 'react';

const GET_PRODUCTS_URL = 'https://fakestoreapi.com/products';

const useProducts = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(GET_PRODUCTS_URL)
			.then((response) => {
				if (response.status >= 400) {
					throw new Error('Server seems to be down.');
				}
				return response.json();
			})
			.then((data) => setProducts(data))
			.catch((error) => setError(error))
			.finally(() => setLoading(false));
	}, []);

	return { products, error, loading };
};

export default useProducts;
