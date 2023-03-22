let saida = document.getElementById("exemplos")

function gerarTryCatch() {   

    let saida2 = document.getElementById("exemplos2")

    try{
      //alert("Hello World!") - CÓDIGO CORRETO
      alerta("Hello World!") //CÓDIGO ERRADO
    }catch(erro){ 
      tratarErro(erro)
    }finally{
      saida2.innerHTML = `Finalizado`
    }
}

function tratarErro( erro ){
  if (erro.message == "alerta is not defined") {
    throw new Error(saida.innerHTML = "Função 'alerta' não existe") 
  }else{
    throw new Error(saida.innerHTML = "Um erro aconteceu") 
  }
}
