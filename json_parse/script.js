function converterStringEmJSON(){

    let string = '{"nome": "Fernanda", "sobrenome": "Moreira", "idade": 45}'
    let string2 = ""
    let jsonConvertido = JSON.parse(string)
    let saida = document.getElementById("exemplos")

    let jsonConvertido2 = JSON.parse(string, function (chave, valor) {
    if (chave == "nome" || chave == "sobrenome") {
        return valor.toUpperCase();
    } else {
        return valor;
    }
    })

    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
                string2 = JSON.parse(this.responseText);
                
                let textoSaida = `
                JSON1 convertido em String nome: ${jsonConvertido.nome}<br>
                JSON1 convertido em String sobrenome: ${jsonConvertido.sobrenome}<br>
                JSON1 convertido em String idade: ${jsonConvertido.idade}<br>
                JSON2 convertido em String nome caixa alta: ${jsonConvertido2.nome}<br>
                JSON2 convertido em String sobrenome caixa alta: ${jsonConvertido2.sobrenome}<br>
                JSON2 convertido em String idade: ${jsonConvertido2.idade}<br>
                JSON convertido a partir da internet - id: ${string2.id}<br>
                JSON convertido a partir da internet - date: ${string2.date}<br>
                JSON convertido a partir da internet - title: ${string2.title.rendered}<br>
                JSON convertido a partir da internet - link: ${string2.link}<br>
                `
                console.log(string2)
                saida.innerHTML = textoSaida
            }else{
                string2 = "Erro!";
            }
        };
    xmlhttp.open("GET", "https://www.soccerincanada.ca/wp-json/wp/v2/posts/1822/", true);
    xmlhttp.send();
}
