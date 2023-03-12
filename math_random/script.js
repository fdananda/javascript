function gerarNumerosAleatorios() {
	let numeroAleatorio = Math.random();
	let numeroEntre0E10 = Math.random() * 10;
	let numeroEntre0E100 = Math.random() * 100;
	let numeroEntre1E10 = Math.floor((Math.random() * 10) + 1);
	let numeroEntre1E100  = Math.floor((Math.random() * 100) + 1);

	let textoSaida = "Número Aleatório entre 0 (inclusive) e 1 (exclusivo): " + numeroAleatorio + 
	"<br> Número Aleatório entre 0 e 10: " + numeroEntre0E10 + 
	"<br> Número Aleatório entre 0 e 100: " + numeroEntre0E100 + 
	"<br> Número Aleatório entre 1 e 10 (arredondado para mais): " + numeroEntre1E10 + 
	"<br> Número Aleatório entre 1 e 100 (arredondado para mais): " + numeroEntre1E100

	let saida = document.getElementById("exemplos")
	saida.innerHTML = textoSaida
}