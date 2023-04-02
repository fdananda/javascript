function obterElementosPeloNome(numero) {

	let colecaoClassName = document.getElementsByName(numero)
	let saida = document.getElementById("exemplos")

	let textoSaida = `A colecaoClassName é uma: ${colecaoClassName}<br>
	O tamanho da colecaoClassName é: ${colecaoClassName.length}<br>
	`

	for (let i =0; i < colecaoClassName.length; i++) {	
	textoSaida += `O item ${i} é ${colecaoClassName[i].value}<br>`
	saida.innerHTML = textoSaida
	}
}
