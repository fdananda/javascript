let saida = document.getElementById("exemplos")

function chamarFuncaoMultiplicar(x, y, funcaoCallbackSucesso, funcaoCallbackErro) {
	
    //Função callback
    if (isNaN(x) || isNaN(y)) {
        imprimirErro()    
    }else{
      let resultado = x * y
      imprimirResultado(resultado)  
    }    
}

function imprimirResultado(resultado) {
    saida.innerHTML = "O resultado é: " + resultado
}


function imprimirErro() {
    saida.innerHTML = "Erro na execução"
}