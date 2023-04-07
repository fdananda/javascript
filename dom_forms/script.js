function obterForms() {

	let saida = document.getElementById("exemplos")
	let forms = document.forms
	let textoSaida = ""

	for (let i = 0; i < forms.length; i++) {
		textoSaida += `<p><strong>Formulário ${i + 1} = ${forms[i].id}</strong> <br>
		` 
		let form = document.forms[i]
		for (var j = 0; j <form.length; j++) {
			textoSaida += `
			Id do Elemento ${j + 1} do form ${i + 1} = ${form[j].id} / 
			Valor ${j + 1} do Elemento ${j + 1} do form ${i + 1} = ${form[j].value} <br>
		`	
		}
	}
	saida.innerHTML = textoSaida
}
