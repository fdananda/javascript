let saida = document.getElementById("exemplos")
let textoSaida = ""

function chamarFuncaoString(string1, string2){

    //Método charAt() - Retorna o caractere em um índice especificado (posição)
    let string_charAt1 = string1.charAt(0)
    let string_charAt2 = string2.charAt(0)

    //charCodeAt() - Retorna o Unicode do caractere em um índice especificado (posição)
    let string_charCodeAt1 = string1.charCodeAt(0)
    let string_charCodeAt2 = string2.charCodeAt(0)

    //concat() - Retorna duas ou mais strings unidas
    let string_concat = string1.concat(" ", string2)

    //constructor - Retorna a função que criou o protótipo String
    let string_constructor1 = string1.constructor
    let string_constructor2 = string2.constructor

    //endsWith() - Retorna true se uma string terminar com um valor especificado e false se o contrário.
    let string_endsWith1 = string1.endsWith("nanda", 8)
    let string_endsWith2 = string2.endsWith("ELENA", 6)

    //fromCharCode() - Converte valores Unicode em caracteres.
    let string_fromCharCode1 = String.fromCharCode(70)
    let string_fromCharCode2 = String.fromCharCode(72)

    //includes() - Retorna true se uma string contiver um valor especificado e false se o contrário.
    let string_includes1 = string1.includes("nanda")
    let string_includes2 = string2.includes("ELENA")

    //indexOf() - Retorna a posição da primeira ocorrência de um valor em uma string e retorna -1 se o valor não for encontrado.
    let string_indexOf1 = string1.indexOf("nanda")
    let string_indexOf2 = string2.indexOf("ELENA")

    //lastIndexOf() - Retorna a posição da última ocorrência de um valor especificado em uma string e retorna -1 se o valor não for encontrado.
    let string_lastIndexOf1 = string1.lastIndexOf("nanda")
    let string_lastIndexOf2 = string2.lastIndexOf("ELENA")

    //length - Retorna o comprimento de uma string.
    let string_length1 = string1.length
    let string_length2 = string2.length

    //repeat() - Retorna uma string com um número de cópias de um valor.
    let string_repeat1 = string1.repeat(2)
    let string_repeat2 = string2.repeat(3)

    //replace() - Pesquisa uma string em busca de um valor e o substitui por um novo valor
    let string_replace1 = string1.replace("nanda", "a")
    let string_replace2 = string2.replace("lena", "licóptero")

    //search() - Retorna a posição da primeira ocorrência de um valor em uma string e retorna -1 se o valor não for encontrado.
    let string_search1 = string1.search("nanda")
    let string_search2 = string2.search("ELENA")

    //slice() - Extrai uma parte de uma string e retorna a parte extraída em uma nova string. Os parâmetros são, respectivamente, start e end e especificam a parte da string a ser extraída.
    let string_slice1 = string1.slice(3,8)
    let string_slice2 = string2.slice(2,6)

    //split() - Divide uma string em uma matriz de substrings.
    let string_split = string_concat.split(" ")

    //startsWith() - Retorna true se uma string iniciar com um valor especificado e false se o contrário.
    let string_startsWith1 = string1.startsWith("nanda", 3)
    let string_startsWith2 = string2.startsWith("ELENA", 1)

    //substr() - Extrai uma parte de uma string e retorna a parte extraída em uma nova string. Os parâmetros são, respectivamente, start e a quantidade de caracteres e especificam a parte da string a ser extraída.
    let string_substr1 = string1.substr(3,5)
    let string_substr2 = string2.substr(2,4)

    //substring() - Extrai uma parte de uma string e retorna a parte extraída em uma nova string. Os parâmetros são, respectivamente, start e end e especificam a parte da string a ser extraída.
    let string_substring1 = string1.substring(3,8)
    let string_substring2 = string2.substring(2,6)

    //toLowerCase() - Converte uma string para letras minúsculas.
    let string_toLowerCase1 = string1.toLowerCase()
    let string_toLowerCase2 = string2.toLowerCase()

    //toString() - Converte um objeto string em uma string
    let numero = 1977
    let string_toString1 = numero.toString()

    //toUpperCase() - Converte uma string para letras MAIÚSCULAS.
    let string_toUpperCase1 = string1.toUpperCase()
    let string_toUpperCase2 = string2.toUpperCase()

    //trim() - Remove espaços em branco de ambos os lados de uma string
    let string_novaStringComEspaco = "   " + string1 + "   " + string2 + "   "
    let string_trim = string_novaStringComEspaco.trim()

    //trimEnd() -  Remove espaços em branco do final de uma string
    let string_trimEnd = string_novaStringComEspaco.trimEnd()


    textoSaida = 
    `charAt(0) string1 posição 0 = ${string_charAt1}<br>
     charAt(0) string2 posição 0 = ${string_charAt2}<br>
     charCodeAt() string1 posição 0 = ${string_charCodeAt1}<br>
     charCodeAt() string2 posição 0 = ${string_charCodeAt2}<br>
     concat() = ${string_concat}<br>
     constructor string1 = ${string_constructor1}<br>
     constructor string2 = ${string_constructor2}<br>
     string_endsWith1 "nanda" com 8 posições finais = ${string_endsWith1}<br>
     string_endsWith2 "ELENA" com 6 posições finais (diferencia MAIÚSCULAS e minúsculas) = ${string_endsWith2}<br>
     constructor string_fromCharCode1 = ${string_fromCharCode1}<br>
     constructor string_fromCharCode2 = ${string_fromCharCode2}<br>
     string_includes1 "nanda" = ${string_includes1}<br>
     string_includes2 "ELENA" (diferencia MAIÚSCULAS e minúsculas) = ${string_includes2}<br>
     string_indexOf1 "nanda" = ${string_indexOf1}<br>
     string_indexOf2 "ELENA" (diferencia MAIÚSCULAS e minúsculas) = ${string_indexOf2}<br>
     string_lastIndexOf1 "nanda" = ${string_lastIndexOf1}<br>
     string_lastIndexOf2 "ELENA" (diferencia MAIÚSCULAS e minúsculas) = ${string_lastIndexOf2}<br>
     string_length1 = ${string_length1}<br>
     string_length2 = ${string_length2}<br>
     string_replace1 "nanda" por "a" = ${string_replace1}<br>
     string_replace2 "lena" por "licóptero" = ${string_replace2}<br>
     string_search1 "nanda" = ${string_search1}<br>
     string_search2 "ELENA" (diferencia MAIÚSCULAS e minúsculas) = ${string_search2}<br>
     string_slice1 = ${string_slice1}<br>
     string_slice2 = ${string_slice2}<br>
     string_split de "Fernanda Helena" = ${string_split}<br>
     string_startsWith1 "nanda" na terceira posição inicial = ${string_startsWith1}<br>
     string_startsWith2 "ELENA" na primeira posição inicial (diferencia MAIÚSCULAS e minúsculas) = ${string_startsWith2}<br>
     string_substr1 = ${string_substr1}<br>
     string_substr2 = ${string_substr2}<br>
     string_substring1 = ${string_substring1}<br>
     string_substring2 = ${string_substring2}<br>
     string_toLowerCase1 = ${string_toLowerCase1}<br>
     string_toLowerCase2 = ${string_toLowerCase2}<br>
     string_toString = ${string_toString1} é do tipo ${typeof string_toString1}<br>
     string_toUpperCase1 = ${string_toUpperCase1}<br>
     string_toUpperCase2 = ${string_toUpperCase2}<br>
     string_novaStringComEspaco = ${string_novaStringComEspaco}<br>
     string_trim = ${string_trim}<br>
     string_trimEnd = ${string_trimEnd}<br>
     `

    saida.innerHTML = textoSaida
}
