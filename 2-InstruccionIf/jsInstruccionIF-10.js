function mostrar() {
	let notaRandom;

	notaRandom = Math.floor(Math.random() * 11);

	if (notaRandom >= 9) {
		alert("Excente, su nota es " + notaRandom);
	} else if (notaRandom < 4) {
		alert("Vamos, la próxima se puede, su nota es " + notaRandom);
	} else {
		alert("Aprobó, su nota es " + notaRandom);
	}
}