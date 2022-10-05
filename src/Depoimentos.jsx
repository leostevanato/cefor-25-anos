import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react';
import BotoesNavCarousel from "./BotoesNavCarouselDepoimentos";
import useFetch from "./useFetch";

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

function listarDepoimentos(items_json) {
	const listaDepoimentos = items_json.map((item, index) => {
		let classeCor = 'cor-' + ((index % 4) + 1); // Cor do box sequencial
		// let classeCor = 'cor-' + ((item.id % 4) + 1); // Cor do box fixo por item
	
		return (
			<div key={ item.id } className="card-depoimento mx-0 ms-lg-4">
				<div className={ 'aspas-duplas ' + classeCor }>“</div>
				<div className={ 'conteudo ' + classeCor }>
					<span className="depoimento" dangerouslySetInnerHTML={ { __html: item.depoimento } } />
					<br /><br />
					<span className="nome">{ item.nome }</span>
					<br />
					<span className="area-ou-instituicao">{ item.areaOuInstituicao }</span>
				</div>
			</div>
		)
	});

	return listaDepoimentos;
}

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3001 },
		items: 2
	},
	desktop: {
		breakpoint: { max: 3000, min: 1320 },
		items: 1
	},
	tablet: {
		breakpoint: { max: 1319, min: 992 },
		items: 1
	},
	mobile: {
		breakpoint: { max: 991, min: 0 },
		items: 1
	}
};

export default () => {
	const [error, isLoaded, items] = useFetch('depoimentos.json');

	if (error) {
		return <div>Erro: { error.message }</div>;
	} else if (!isLoaded) {
		return <div>Carregando...</div>;
	} else {
		shuffleArray(items);

		return (
			<Carousel
				responsive={ responsive }
				arrows={ false }
				renderButtonGroupOutside={ true }
				customButtonGroup={ <BotoesNavCarousel /> }
				beforeChange={(nextSlide, { currentSlide }) => {
					document.getElementById("depoimentos").scrollIntoView();
				}}
			>
				{ listarDepoimentos(items) }
			</Carousel>
		);
	}
}
