function mostrarDataAtual() {
    let dataAtual = new Date()

    let dia 		= dataAtual.getDate()
    let mes  		= dataAtual.getMonth() + 1
    let ano			= dataAtual.getFullYear()
    let dataFormatada = dia + "/" + mes + "/" + ano

	let hora = dataAtual.getHours()
    let minuto = dataAtual.getMinutes()
    let segundo = dataAtual.getSeconds()
    let horaFormatada = hora + ":" + minuto + ":" + segundo
    

	let saida = document.getElementById("exemplos")
	saida.innerHTML = "Data e hora atual: " + dataFormatada + " - " + horaFormatada
}