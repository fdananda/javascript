function converterParaNumeros() {
	let string 		 	= Number("2")
	let booleanoTrue 	= Number(true)
	let booleanoFalse 	= Number(false)
	let dataAtual 		= Number(new Date())

	let textoSaida = "String em número " + string + 
	"<br> Booleano true em número: " + booleanoTrue + 
	"<br> Booleano false em número: " + booleanoFalse + 
	"<br> Data Atual em número: " + dataAtual 

	let saida = document.getElementById("exemplos")
	saida.innerHTML = textoSaida
}