function obterElementosPorNomeDaClasse(lista) {

	let colecaoClassName = document.getElementsByClassName(lista)
	let saida = document.getElementById("exemplos")

	let textoSaida = `A colecaoClassName é uma: ${colecaoClassName}<br>
	O tamanho da colecaoClassName é: ${colecaoClassName.length}<br>
	`

	for (let i =0; i < colecaoClassName.length; i++) {	
	textoSaida += `O item ${i} é ${colecaoClassName[i].textContent}<br>`
	saida.innerHTML = textoSaida
	}
}
