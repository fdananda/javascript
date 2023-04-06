function acessarPropriedades(){

    let saida = document.getElementById("exemplos")
    let textoSaida = ""

     const objetoPessoa = {
        nome       : "Fernanda",
        nascimento : 1977,
    }

    textoSaida = `
     Acessando propriedade nome com notação de ponto: ${objetoPessoa.nome}<br>
     Acessando propriedade nome com notação de colchetes: ${objetoPessoa['nascimento']}<br>
     
     `

    saida.innerHTML = textoSaida
}
