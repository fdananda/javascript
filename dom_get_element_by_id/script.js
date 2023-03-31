function obterElementoPeloId(id) {

	let get_id = document.getElementById(id)

	let numeroConvertido = converterEmNumero(id);

	let textoSaida = 
	`O número recuperado é: ${numeroConvertido}<br>
	typeof numeroConvertido: ${typeof numeroConvertido}<br>
	get_id: ${get_id}<br>
	typeof get_id: ${typeof get_id}<br>
	get_id.value: ${get_id.value}<br>
	typeof get_id.value: ${typeof get_id.value}<br>
	get_id.id: ${get_id.id}<br>
	typeof get_id.id: ${typeof get_id.id}<br>
	`

	let saida = document.getElementById("exemplos")
	saida.innerHTML = textoSaida
}

function converterEmNumero(id)
{
    let elemento = document.getElementById(id);
    let texto = elemento.value;
    let numero = Number(texto);
    return numero;
}
