function obterElementosPorNomeDeTag() {

	let colecaoTagName = document.getElementsByTagName('li')
	let saida = document.getElementById("exemplos")

	let textoSaida = `A colecaoTagName é uma: ${colecaoTagName}<br>
	O tamanho da colecaoTagName é: ${colecaoTagName.length}<br>
	`

	for (let i =0; i < colecaoTagName.length; i++) {	
	textoSaida += `O item ${i} é ${colecaoTagName[i].textContent}<br>`
	saida.innerHTML = textoSaida
	}
}
