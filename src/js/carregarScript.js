const carregarScript = (nome, path, callback) => {
	const scriptID = nome + '-js';
	const existingScript = document.getElementById(scriptID);

	if (!existingScript) {
		const arquivo = path + nome + '.js?t=' + __TIME_DA_BUILD__; // __TIME_DA_BUILD__ para evitar cache do script
		const script = document.createElement('script');

		script.src = arquivo;
		script.id = scriptID;
		document.body.appendChild(script);

		script.onload = () => {
			if (callback) callback();
		};
	}

	if (existingScript && callback) callback();
};
export default carregarScript;