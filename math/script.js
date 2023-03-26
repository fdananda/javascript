let saida = document.getElementById("exemplos")
let textoSaida = ""

function chamarFuncaoMath(number1, number2){

    //Método Math.abs() - Retorna o valor absoluto de um número
    let math_abs1 = Math.abs(number1)
    let math_abs2 = Math.abs(number2)

    //Método Math.ceil() - Arredonda um número para o inteiro mais próximo acima.
    let math_ceil1 = Math.ceil(number1)
    let math_ceil2 = Math.ceil(number2)

    //Método Math.floor() - Arredonda um número para o inteiro mais próximo abaixo.
    let math_floor1 = Math.floor(number1)
    let math_floor2 = Math.floor(number2)

    //Método Math.max() - Retorna o número com o valor mais alto.
    let math_max = Math.max(number1, number2)

    //Método Math.min() - Retorna o número com o menor valor.
    let math_min = Math.min(number1, number2)

    //Math.PI - Retorna o número PI
    let math_pi = Math.PI

    //Método Math.pow() - Retorna o valor de x (base) à potência de y (expoente).
    let math_pow = Math.pow(number2, number1)

    //Método Math.random() - Retorna um número aleatório de 0 (inclusive) até, mas não incluindo 1 (exclusivo).
    let math_random = Math.random()

    //Método Math.round() - Arredonda um número para o inteiro mais próximo.
    let math_round1 = Math.round(number1)
    let math_round2 = Math.round(number2)

    //Método Math.sign() - Retorna se um número é negativo (-1), positivo (1) ou zero (0).
    let math_sign1 = Math.sign(number1)
    let math_sign2 = Math.sign(number2)

    //Método Math.sqrt() - Retorna a raiz quadrada de um número.
    let math_sqrt1 = Math.sqrt(math_abs1)
    let math_sqrt2 = Math.sqrt(number2)

    //Método Math.trunc() - Retorna a parte inteira de um número, removendo os decimais.
    let math_trunc1 = Math.trunc(number1)
    let math_trunc2 = Math.trunc(number2)

    textoSaida = 
    `math_abs1 = ${math_abs1}<br>
     math_abs2 = ${math_abs2}<br>
     math_ceil1 = ${math_ceil1}<br>
     math_ceil2 = ${math_ceil2}<br>
     math_floor1 = ${math_floor1}<br>
     math_floor2 = ${math_floor2}<br>
     math_max = ${math_max}<br>
     math_min = ${math_min}<br>
     math_PI = ${math_pi}<br>
     math_pow = ${math_pow}<br>
     math_random = ${math_random}<br>
     math_round1 = ${math_round1}<br>
     math_round2 = ${math_round2}<br>
     math_sign1 = ${math_sign1}<br>
     math_sign2 = ${math_sign2}<br>
     math_sqrt1 = ${math_sqrt1}<br>
     math_sqrt2 = ${math_sqrt2}<br>
     math_trunc1 = ${math_trunc1}<br>
     math_trunc2 = ${math_trunc2}<br>
     `

    saida.innerHTML = textoSaida
}
