const carregarScript = (nome, path, callback) => {
	const scriptID = nome + '-js';
	const existingScript = document.getElementById(scriptID);

	if (!existingScript) {
		const script = document.createElement('script');
		script.src = path + nome + '.js';
		script.id = scriptID;
		document.body.appendChild(script);

		script.onload = () => {
			if (callback) callback();
		};
	}

	if (existingScript && callback) callback();
};
export default carregarScript;