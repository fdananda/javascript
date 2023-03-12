function converterParaString() {
	let numero1  	= 20/30
	let numero2 	= 3.14159
	
	let textoSaida = 
	"20/30 sem o toFixed: " + numero1 + 
	"<br> 3.14159 sem o toFixed: " + numero2 + 
	"<br> 20/30 com o toFixed(): " + numero1.toFixed() + 
	"<br> 3.14159 com o toFixed(1) para uma casa decimal: " + numero2.toFixed(1) 

	let saida = document.getElementById("exemplos")
	saida.innerHTML = textoSaida
}