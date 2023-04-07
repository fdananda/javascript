function obterDadosWeb(url){

  let botao = document.getElementById('botao');
  botao.setAttribute("disabled","");

  fetch(url).then(response => {
      if(!response.ok){
        alert("Falha no processamento!")
        return
      }
      response.json().then(resposta => {
        let saida = document.getElementById("exemplos")
        saida.innerHTML = `
        JSON convertido a partir da internet - id: ${resposta.id}<br>
        JSON convertido a partir da internet - date: ${resposta.date}<br>
        JSON convertido a partir da internet - title: ${resposta.title.rendered}<br>
        JSON convertido a partir da internet - link: ${resposta.link}<br>
        `
      }).catch(erro => alert("Erro de JSON: " + erro))
    }).catch(erro => alert("Erro na busca: " + erro))
    .finally( mensagem => {
        botao.removeAttribute("disabled");
      })
}
