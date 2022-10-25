import { useEffect, useState } from "react";
import IconeYoutube from './assets/icone_youtube.png';

export default () => {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);

	// Note: the empty deps array [] means
	// this useEffect will run once
	// similar to componentDidMount()
	useEffect(() => {
		fetch("cefor_videos.json")
			.then(res => res.json())
			.then(
				(result) => {
					setIsLoaded(true);
					setItems(result);
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			);
	}, []);

	if (error) {
		return <div>Error: { error.message }</div>;
	} else if (!isLoaded) {
		return <div>Carregando...</div>;
	} else {
		return (
			<div className="row row-cols-1 row-cols-xl-2 mx-auto justify-content-center">
				{
					items.map(item => {
						let tipo = <><span>VÍDEO</span>{ item.tipo && <> | <span>{ item.tipo }</span></> }</>;
							
						return (
							<div key={ item.id } className="position-relative col bg-white">
								<h3 className="titulo-coluna">{ tipo }</h3>

								<p className="texto-coluna">{ item.titulo }</p>

								{ item.idYoutube ?
									<div className="link-assistir-no-youtube position-absolute">
										<a href={ "https://www.youtube.com/watch?v=" + item.idYoutube } target="_blank">
											<img className="align-text-top me-1" src={ IconeYoutube } alt="Ícone do Youtube" /> ASSISTIR »
										</a>
									</div>
									:
									<p className="fs-3 fw-bold w-50 mx-auto mt-7">EM BREVE</p>
								}
							</div>
						)
					})
				}
			</div>
		);
	}
};