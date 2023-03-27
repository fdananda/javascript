function obterElemento(id) {

	let numeroConvertido = converterEmNumber(id);

	let textoSaida = `O número recuperado é: ${numeroConvertido}`

	let saida = document.getElementById("exemplos")
	saida.innerHTML = textoSaida
}

function converterEmNumber(id)
{
    let elemento = document.getElementById(id);
    let texto = elemento.value;
    let numero = Number(texto);
    return numero;
}
