ButtonSeta.defaultProps = {
	className: '',
	corFundo: "#0A312C",
	corSeta: "#E8E8E7",
	disabled: false,
	direcao: 'esquerda', // 'esquerda' ou 'direita'
	onClick: () => {},
	altura: "40",
	largura: "40"
};

function ButtonSeta(props) {
	let direcaoStyle = (props.direcao == 'direita') ? { transform: 'scaleX(-1)' } : {};
	
	return (
		<button type="button" style={ direcaoStyle } className={ props.className } disabled={ props.disabled } onClick={ props.onClick }>
			<svg width={ props.largura } height={ props.altura } viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="20" cy="20" r="20" fill={ props.corFundo } />
				<path d="M23.75 10.8333L15 19.5833L23.75 28.3333" stroke={ props.corSeta } strokeWidth="6" />
			</svg>
		</button>
	);
};

export default ButtonSeta;