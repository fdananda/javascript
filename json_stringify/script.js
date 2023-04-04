function converterJSONEmString(){

    let json1 = {"nome": "Fernanda", "sobrenome": "Moreira", "idade": 45}
    let jsonConvertido = JSON.stringify(json1)

    var jsonConvertido2 = JSON.stringify(json1, function (chave, valor) {
    if (chave == "nome" || chave == "sobrenome") {
        return valor.toUpperCase();
    } else {
        return valor;
    }
    })

    let saida = document.getElementById("exemplos")
    let textoSaida = `
    JSON1 convertido em String: ${jsonConvertido}<br>
    JSON2 convertido em String: ${jsonConvertido2}
    `

    saida.innerHTML = textoSaida
}
