import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react';
import ButtonSeta from "./ButtonSeta";

const imagensCeforNumeros = [
	{
		imagem: 'cefor_em_numeros_1.png',
		alt: '1'
	},
	{
		imagem: 'cefor_em_numeros_2.png',
		alt: '2'
	},
	{
		imagem: 'cefor_em_numeros_3.png',
		alt: '3'
	},
	{
		imagem: 'cefor_em_numeros_4.png',
		alt: '4'
	},
	{
		imagem: 'cefor_em_numeros_5.png',
		alt: '5'
	},
	{
		imagem: 'cefor_em_numeros_6.png',
		alt: '6'
	}
];

const listaImagens = imagensCeforNumeros.map((item, index) => {
	return <div key={ index } className="card-imagem mx-auto">
		<img className="img-fluid mx-auto d-block" src={ '/src/cefor_em_numeros/' + item.imagem } alt={ item.alt } />
	</div>
});

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

const CustomSetaEsquerda = ({ onClick, ...rest }) => {
	const { carouselState: { currentSlide } } = rest;

	return <ButtonSeta
		className="btn carousel-seta esquerda border-0"
		disabled={ currentSlide === 0 }
		onClick={ () => onClick() }
	/>
};

const CustomSetaDireita = ({ onClick, ...rest }) => {
	const { carouselState: { currentSlide, totalItems, slidesToShow } } = rest;

	return <ButtonSeta
		direcao="direita"
		className="btn carousel-seta direita border-0"
		disabled={ currentSlide === (totalItems - slidesToShow) }
		onClick={ () => onClick() }
	/>
};

const BotoesNavCarousel = ({ next, previous, goToSlide, ...rest }) => {
	const { carouselState: { currentSlide, totalItems, slidesToShow } } = rest;

	return (
		<div className="botoes-nav-carousel carousel-button-group position-absolute d-flex container-lg">
			<ButtonSeta className="btn seta esquerda border-0" corFundo="#51BABB" corSeta="#0A312C" disabled={ currentSlide === 0 } onClick={ () => previous() } />

			<ButtonSeta direcao="direita" className="btn seta direita border-0" corFundo="#51BABB" corSeta="#0A312C" disabled={ currentSlide === (totalItems - slidesToShow) } onClick={ () => next() } />
		</div>
	);
};

export default () => (
	<Carousel
		responsive={ responsive }
		renderArrowsWhenDisabled={ true }
		arrows={ false }
		renderButtonGroupOutside={true}
		customButtonGroup={ <BotoesNavCarousel /> }
	>
		{ listaImagens }
	</Carousel>
);
