function checarSeEUmNumero() {   

    let saida = document.getElementById("exemplos")

    let nome = "Fernanda"
    let nascimento = 1977
    let nan1 = isNaN(nome)
    let nan2 = isNaN(nascimento)

    saida.innerHTML = `A variável nome contém o valor ${nome} e não é um número: ${nan1}<br>
    A variável nascimento contém o valor ${nascimento} e não é um número: ${nan2}`
}
