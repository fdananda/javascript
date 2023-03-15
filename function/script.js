function chamarFuncaoSemParametrosESemRetorno() {
	let saida = document.getElementById("exemplos")
	saida.innerHTML = "Opção 1 - Executada função sem parâmetro e sem retorno"
}

function chamarFuncaoComParametrosESemRetorno(parametro) {
    let saida = document.getElementById("exemplos")
    saida.innerHTML = parametro
}

function chamarFuncaoComParametrosEComRetorno(parametro2) {
    let saida = document.getElementById("exemplos")
    saida.innerHTML = executarFuncao(parametro2)
}

function executarFuncao(parametro3) {
    return parametro3
}
