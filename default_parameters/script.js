//Opção 1 - Atribuir um valor padrão usando o método isNaN de teste
function chamarFuncaoMultiplicar(x,y) {
	let saida = document.getElementById("exemplos")

    numero1 = isNaN(x) ? 0 : x
    numero2 = isNaN(y) ? 0 : y
    let resultado = numero1 * numero2
	saida.innerHTML = "O resultado é: " + resultado
}

//Opção 2 - Atribuir um valor padrão na declaração da função
function chamarFuncaoSomar(x = 0, y = 0) {
    let saida = document.getElementById("exemplos")
    numero1 = x
    numero2 = y

    let resultado = numero1 + numero2
    saida.innerHTML = "O resultado é: " + resultado
}
