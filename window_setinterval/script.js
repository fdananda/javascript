function iniciarRelogio() {
    setInterval(atualizarRelogio, 1000);
}

function atualizarRelogio() {
    var dataAtual = new Date()
		var hora = dataAtual.getHours()
    	var minuto = dataAtual.getMinutes()
    	var segundo = dataAtual.getSeconds()
    	var horaForm = hora + ":" + minuto + ":" + segundo
    	var saida = document.getElementById("botao")
	    saida.innerHTML = horaForm
}