import { useEffect, useRef } from "react";

ButtonSeta.defaultProps = {
	className: '',
	corFundo: "#0A312C",
	corSeta: "#E8E8E7",
	disabled: false,
	direcao: 'esquerda', // 'esquerda' ou 'direita'
	onClick: () => {},
	altura: "40",
	largura: "40",
	tipo: 'simples', // 'simples' ou 'dupla'
	classDisable: ''
};

function ButtonSeta(props) {
	const ref = useRef(null);
	let direcaoStyle = (props.direcao == 'direita') ? { transform: 'scaleX(-1)' } : {};

	useEffect(() => {

	}, []);

	const handleClick = (event) => {
		props.onClick();
	};

	return (
		<button ref={ ref } type="button" className={ props.className } disabled={ props.disabled } onClick={ handleClick }>
			<svg width={ props.largura } height={ props.altura } style={ direcaoStyle } viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="20" cy="20" r="20" fill={ props.corFundo } />
				{ props.tipo == 'dupla'
					? <>
						<path d="M19.8 11.2L11 20l8.8 8.8" stroke={ props.corSeta } strokeWidth="4" />
						<path d="M29.8 11.2L21 20l8.8 8.8" stroke={ props.corSeta } strokeWidth="4" />
					  </>
					: <path d="M23.75 10.8333L15 19.5833L23.75 28.3333" stroke={ props.corSeta } strokeWidth="6" />
				}
			</svg>
		</button>
	);
};

export default ButtonSeta;