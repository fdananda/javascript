function gerarString() {
    
    let nome    = "Fernanda"
    let idade   = 45
    let data    = new Date()
    let dia     = data.getDate()
    let mes     = data.getMonth() + 1
    let ano     = data.getFullYear()

    let textoSaidaConvencional = "Olá, " + nome + ", hoje é dia " + dia + "/" + mes + "/" + ano + " e você tem " + idade + " anos. "
    let textoComTemplateStrings = `Olá, ${nome}, hoje é dia ${dia}/${mes}/${ano} e você tem ${idade} anos. `
    let textoSaida = textoSaidaConvencional + "<br>" + textoComTemplateStrings

    let saida = document.getElementById("exemplos")
    saida.innerHTML = textoSaida
}