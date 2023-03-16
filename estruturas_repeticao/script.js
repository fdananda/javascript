function chamarFor() {
    let nomes = ["Fernanda", "Helena", "Rodrigues", "Moreira"]
    let listaNome = ""

    
    for (i=0; i < nomes.length; i++) {
        listaNome += "+ " + nomes[i] + "<br>"
    }


    let saida = document.getElementById("exemplos")
        saida.innerHTML = "Resultado da instrução for: <br>" + listaNome
}

function chamarWhile() {
    let nomes = ["Fernanda", "Helena", "Rodrigues", "Moreira"]
    let listaNome = ""
    let i = 0;

    while (i < nomes.length) {
     listaNome += "+ " + nomes[i] + "<br>"
     i++;
    }

    let saida = document.getElementById("exemplos")
        saida.innerHTML = "Resultado da instrução while: <br>" + listaNome
}


function chamarDoWhile() {
    let nomes = ["Fernanda", "Helena", "Rodrigues", "Moreira"]
    let listaNome = ""
    let i = 0;

    do {
     listaNome += "+ " + nomes[i] + "<br>"
     i++;
    }
    while (i < nomes.length);

    let saida = document.getElementById("exemplos")
        saida.innerHTML = "Resultado da instrução do... while: <br>" + listaNome
}