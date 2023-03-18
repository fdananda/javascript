function gerarLista() { 

let nomes = ["Fernanda", "Helena", "Rodrigues", "Moreira"]
let listaNome = ""
let saida = document.getElementById("lista")

 
for (i=0; i < nomes.length; i++) {

    listaNome += "+ " + nomes[i] + "<br>"
    let itemLista = document.createElement("li")
    itemLista.innerText = nomes[i]
    
    saida.appendChild(itemLista)
    
    }


}