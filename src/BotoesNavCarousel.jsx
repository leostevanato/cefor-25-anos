export default ({ next, previous, goToSlide, ...rest }) => {
	const { carouselState: { currentSlide, totalItems, slidesToShow } } = rest;
	
	return (
		<div className="carousel-button-group position-absolute d-flex mt-4 gap-4 start-50">
			<button type="button" className="btn seta esquerda border-0" disabled={currentSlide === 0} onClick={ () => previous() } />
			<button type="button" className="btn seta direita border-0" disabled={currentSlide === (totalItems - slidesToShow)} onClick={ () => next() } />
		</div>
	);
};