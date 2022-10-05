import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react';
import BotoesNavCarousel from "./BotoesNavCarouselCeforEmNumeros";
import useFetch from "./useFetch";

function listarImagens(imagens_json) {
	const retornoListaImagens = imagens_json.map((item, index) => {
		return (
			<div key={ item.id } className="card-imagem mx-auto">
				<img className="img-fluid mx-auto d-block" src={ '/cefor25anos/cefor_em_numeros/' + item.imagem } alt={ item.alt } />
			</div>
		)
	});

	return retornoListaImagens;
}

const responsive = {
	desktop: {
		breakpoint: { max: 4000, min: 1025 },
		items: 1
	},
	tablet_e_mobile: {
		breakpoint: { max: 1024, min: 0 },
		items: 1
	}
};

export default () => {
	const [error, isLoaded, items] = useFetch('cefor_em_numeros.json');

	if (error) {
		return <div>Erro: { error.message }</div>;
	} else if (!isLoaded) {
		return <div>Carregando...</div>;
	} else {
		return (
			<Carousel
				responsive={ responsive }
				renderArrowsWhenDisabled={ true }
				arrows={ false }
				renderButtonGroupOutside={ true }
				customButtonGroup={ <BotoesNavCarousel /> }
			>
				{ listarImagens(items) }
			</Carousel>
		)
	}
};
