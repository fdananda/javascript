const funcaoAnonima = function(){ 
    return "Função anônima executada"
}

function chamarFuncaoAnonima() {   
    let saida = document.getElementById("exemplos")
    saida.innerHTML = funcaoAnonima()
}

const arrowFunction = () => "Arrow Function executada"

function chamarArrowFunction() {   
    let saida = document.getElementById("exemplos")
    saida.innerHTML = arrowFunction()
}
