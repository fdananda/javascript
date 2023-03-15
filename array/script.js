
function gerarArray() {
    let nomes = ["Fernanda", "Helena", "Rodrigues", "Moreira"]
    //push() - O método push() adiciona novo(s) item(ns) ao final do array.
    nomes.push("Novo Nome Incluído")
    nomes.push("Nome a ser deletado")

    //pop() - O método pop() remove o último elemento do array.
    nomes.pop()

    let listaNome = ""
    
    for (i=0; i < nomes.length; i++) {
        listaNome += "+ " + nomes[i] + "<br>"
    }

    let textoSaida = 
    "Array nomes: " + nomes +
    "<br> Tamanho do Array: " + nomes.length +
    "<br> Itens do Array: <br>" + listaNome + 
    //includes() -  O método includes() retorna true se o array contém o valor especificado e retorna false se o valor não for encontrado.
    "Existe uma Fernanda? " + nomes.includes("Fernanda") +
    "<br> Existe uma Amanda? " + nomes.includes("Amanda")

    let saida = document.getElementById("exemplos")
    saida.innerHTML = textoSaida
}

