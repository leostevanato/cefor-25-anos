import { useEffect, useState } from "react";

const useFetch = (url) => {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch(url)
			.then(res => res.json())
			.then(
				(result) => {
					setIsLoaded(true);
					setItems(result);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			);
	}, [url]);

	return [error, isLoaded, items];
	// if (error) {
	// 	return error;
	// } else if (!isLoaded) {
	// 	return <div>Carregando...</div>;
	// } else {
	// }
};

export default useFetch;