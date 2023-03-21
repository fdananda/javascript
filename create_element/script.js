function gerarLista() { 

let nomes = ["Fernanda", "Helena", "Rodrigues", "Moreira"]
let saida = document.getElementById("lista")
let listaNome = ""

while (saida.children.length > 0)
        saida.removeChild(saida.children[0]);
 
for (i=0; i < nomes.length; i++) {

    listaNome += "+ " + nomes[i] + "<br>"
    let itemLista = document.createElement("li")
    itemLista.innerText = nomes[i]
    
    saida.appendChild(itemLista)

    }
}