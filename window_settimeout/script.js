let botao = document.getElementById("botao")
function iniciarTimer(){
	botao.innerHTML = "Timer Iniciado"
	setTimeout(pararTimeOut, 5000)
}
function pararTimeOut() {
	botao.innerHTML = "Timer concluído após 5 segundos"
}