function abrirTrue() {
	let true1  	= 1 < 2
	let true2 	= "Fernanda"
	let true3   = 25 - 30
	let true4   = "false"  
	
	let textoSaida = 
	"1 < 2: " + Boolean(true1) + 
	"<br> String Fernanda: " + Boolean(true2) + 
	"<br> Cálculo de 25 - 30 (-5): " + Boolean(true3) + 
	"<br> String false: " + Boolean(true4) 

	let saida = document.getElementById("exemplos")
	saida.innerHTML = textoSaida
}

function abrirFalse() {
	let false1  = 0
	let false2 	= -0
	let false3  = ""
	let false4  = null
	let false5 
	let false6 = false
	let false7 = 2 / "Fernanda" 
	
	let textoSaida = 
	"Número 0: " + Boolean(false1) + 
	"<br> Número - 0: " + Boolean(false2) + 
	"<br> String vazia: " + Boolean(false3) + 
	"<br> Valor null: " + Boolean(false4) +  
	"<br> Variável não definida: " + Boolean(false5) + 
	"<br> Valor booleano false: " + Boolean(false6) + 
	"<br> Nan (Not a number): " + Boolean(false7) 

	let saida = document.getElementById("exemplos")
	saida.innerHTML = textoSaida
}