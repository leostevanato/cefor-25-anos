import ButtonSeta from "./ButtonSeta";

export default ({ next, previous, goToSlide, ...rest }) => {
	const { carouselState: { currentSlide, totalItems, slidesToShow } } = rest;

	return (
		<div className="botoes-nav-carousel carousel-button-group position-absolute d-flex container-lg">
			<ButtonSeta className="btn seta esquerda border-0" corFundo="#51BABB" corSeta="#0A312C" disabled={ currentSlide === 0 } onClick={ () => previous() } />

			<ButtonSeta direcao="direita" className="btn seta direita border-0" corFundo="#51BABB" corSeta="#0A312C" disabled={ currentSlide === (totalItems - slidesToShow) } onClick={ () => next() } />
		</div>
	);
};