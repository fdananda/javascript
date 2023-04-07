function obterNames() {

	let saida = document.getElementById("exemplos")
	let elementoNumero1 = document.formularioNumeros.numero1.value
	let elementoNumero2 = document.formularioNumeros.numero2.value
	let elementoNumero3 = document.formularioNumeros.numero3.value

	let elementoTextoNome = document.formularioTextos.nome.value
	console.log(elementoTextoNome)
	let elementoTextoSobrenome = document.formularioTextos.sobrenome.value


	let textoSaida = `
	Valor do Elemento ${document.formularioNumeros.numero1.name} =  ${elementoNumero1}<br>
	Valor do Elemento ${document.formularioNumeros.numero2.name} =  ${elementoNumero2}<br>
	Valor do Elemento ${document.formularioNumeros.numero3.name} =  ${elementoNumero3}<p>

	Valor do Elemento ${document.formularioTextos.nome.name} =  ${elementoTextoNome}<br>
	Valor do Elemento ${document.formularioTextos.sobrenome.name} =  ${elementoTextoSobrenome}<br>
	`
	saida.innerHTML = textoSaida
}
