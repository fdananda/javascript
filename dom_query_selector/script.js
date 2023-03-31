function obterSeletor(seletorCSS) {

	let get_seletorCSS = document.querySelector(seletorCSS)

	let numeroConvertido = converterEmNumero(seletorCSS);

	let textoSaida = 
	`O número recuperado é: ${numeroConvertido}<br>
	typeof numeroConvertido: ${typeof numeroConvertido}<br>
	get_seletorCSS: ${get_seletorCSS}<br>
	typeof get_seletorCSS: ${typeof get_seletorCSS}<br>
	get_seletorCSS.value: ${get_seletorCSS.value}<br>
	typeof get_seletorCSS.value: ${typeof get_seletorCSS.value}<br>
	get_seletorCSS.id: ${get_seletorCSS.id}<br>
	typeof get_seletorCSS.id: ${typeof get_seletorCSS.id}<br>
	`

	let saida = document.querySelector("#exemplos")
	saida.innerHTML = textoSaida
}

function converterEmNumero(seletorCSS)
{
    let elemento = document.querySelector(seletorCSS);
    let texto = elemento.value;
    let numero = Number(texto);
    return numero;
}
