
let nomes   = ["Fernanda", "Helena", "Rodrigues", "Moreira"]
let cidades = ["Fortaleza", "Eusébio", "Vancouver", "Surrey"]

function gerarArray() {
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


function chamarArray(){

    //Método concat() - Concatena dois ou mais arrays, retornando um novo array.
    let array_concat = nomes.concat(cidades)

    //Método copyWithin() - Copia os elementos do array para outra posição no array.
    let array_copyWithin = nomes.copyWithin(1,0) //array.copyWithin(target, start, end)

    //Método entries() - Retorna um Array Iterator com pares chave/valor.
    let array_entries = nomes.entries()
    let array_entrie = "" 
    for (let x of array_entries) {
        array_entrie += "[" + x + "]"
    }
    
    //Método every() - Executa uma função para cada elemento do array, retornando true se verdadeiro para todos os elementos
    let array_every = nomes.every(funcaoEvery)
    function funcaoEvery(nomes){
        return nomes.length <=9
    }

    //Método fill() - Preenche os elementos especificados em um array com um valor.
    let array_fill = nomes.fill("Nanda", 1, 2) //array.fill(value, start, end)

    //Método filter() - Cria um novo array preenchido com elementos que passam em um teste realizado por uma função.
    let array_filter = nomes.filter(funcaoFilter)
    function funcaoFilter(nomes){
        return nomes.length >8
    }

    //Método find() - Retorna o valor do primeiro elemento que passa no teste.
    let array_find = nomes.find(funcaoFind)
    function funcaoFind(nomes){
        return nomes.length >=8
    }

    //Método findIndex() - Retorna a posição do primeiro elemento que passa no teste.
    let array_findIndex = nomes.findIndex(funcaoFindIndex)
    function funcaoFindIndex(nomes){
        return nomes.length >=8
    }
    
    //Método forEach() - Chama uma função para cada elemento em um array.
    let array_nomes_forEach = "";
    nomes.forEach(funcaoForEach);
    function funcaoForEach(item, index) {
    array_nomes_forEach += "[" + index + ": " + item + "]"; 
    }

    //Método includes() - Retorna true se um array contém um valor especificado e false caso contrário.
    let array_includes = nomes.includes("Daniel")

    //Método indexOf() - Retorna a primeira posição de um valor especificado. Retorna -1 se o valor não for encontrado.
    let array_indexOf = nomes.indexOf("Rodrigues")

    //Método Array.isArray() - Retorna true se um objeto for um array, e false caso contrário.
    let array_isArray = Array.isArray(nomes)

    //Método join() - Retorna um array como uma string.
    let array_join = nomes.join()

    //Método keys() - Retorna um Array Iterator com as chaves de um array.
    let array_keys = nomes.keys()
    let array_key = "" 
    for (let x of array_keys) {
        array_key += "[" + x + "]"
    }

    //Método lastIndexOf() - Retorna a última posição de um valor especificado. Retorna -1 se o valor não for encontrado.
    let array_lastIndexOf = nomes.lastIndexOf("Rodrigues")

    //length - Retorna o número de elementos em um array.
    let array_length = nomes.length

    //Método map() - Cria um novo array, chamando uma função para cada elemento do array original.
    let array_map = "";
    nomes.forEach(funcaoMap);
    function funcaoMap(item, index) {
    array_map += "[" + index + ": " + item + "]"; 
    }

    //Método pop() - Remove o último elemento de um array.
    let array_pop = nomes.pop()

    //Método push() - Adiciona novos itens ao final de um array.
    let array_push = nomes.push("Moreira")

    //Método reduce() - Executa uma função redutora para o elemento do array da esquerda para a direita.
    let array_numeros = [175, 50, 25]
    let array_reduce = array_numeros.reduce(funcaoReduce);
    function funcaoReduce(total, numero) {
    return total + numero 
    }

    //Método reduceRight() - Executa uma função redutora para o elemento do array da direita para a esquerda.
    let array_reduceRight = array_numeros.reduce(funcaoreduceRight);
    function funcaoreduceRight(total, numero) {
    return total - numero 
    }

    //Método reverse() - Inverte a ordem dos elementos em um array.
    let array_reverse = nomes.reverse()

    //Método shift() - Remove o primeiro item de um array.
    let array_shift = nomes.shift()

    //Método slice() - Retorna elementos selecionados em um array, como um novo array, a partir de um determinado início e até um determinado final (não inclusivo).
    let array_slice = nomes.slice(0,2)

    //Método some() - Verifica se algum elemento do array passa em um teste (fornecido como uma função de retorno de chamada).
    let array_some = array_numeros.some(funcaoSome);
    function funcaoSome(item) {
    return item > 200 
    }

    //Método sort() - Classifica os elementos de um array em ordem crescente.
    let array_sort = nomes.sort()

    //Método splice() - Adiciona e/ou remove elementos do array.
    let array_splice = nomes.splice(2,1, "Rodrigues", "Moreira") //array.splice(index, howmany, item1, ....., itemX)

    //Método toString() - Retorna uma string com valores de array separados por vírgulas.
    let array_toString = nomes.toString()

    //Método unshift() - Adiciona novos elementos ao início de um array.
    let array_unshift = nomes.unshift("Nanda")

    //Método valueOf() - Retorna o próprio array.
    let array_valueOf = nomes.valueOf()
    


    textoSaida = 
    `array_concat = ${array_concat}<br>
     array_copyWithin = ${array_copyWithin}<br>
     array_entries = ${array_entrie}<br>
     array_every = ${array_every}<br>
     array_fill = ${array_fill}<br>
     array_filter = ${array_filter}<br>
     array_find = ${array_find}<br>
     array_findIndex = ${array_findIndex}<br>
     array_forEach = ${array_nomes_forEach}<br>
     array_includes Daniel = ${array_includes}<br>
     array_indexOf Rodrigues = ${array_indexOf}<br>
     array_isArray = ${array_isArray}<br>
     array_join = ${array_join}<br>
     array_key = ${array_key}<br>
     array_lastIndexOf Rodrigues = ${array_lastIndexOf}<br>
     array_length = ${array_length}<br>
     array_map = ${array_map}<br>
     array_pop = ${array_pop}<br>
     array_push = ${array_push}<br>
     array_reduce = ${array_reduce}<br>
     array_reduceRight = ${array_reduceRight}<br>
     array_reverse = ${array_reverse}<br>
     array_shift = ${array_shift}<br>
     array_slice = ${array_slice}<br>
     array_some = ${array_some}<br>
     array_sort = ${array_sort}<br>
     array_splice = ${array_splice}<br>
     array_toString = ${array_toString}<br>
     array_unshift = ${array_unshift}<br>
     array_valueOf = ${array_valueOf}<br>
     `
     let saida = document.getElementById("exemplos")
     saida.innerHTML = textoSaida
}

