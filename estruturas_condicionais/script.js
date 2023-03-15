function chamarIfElse() {

    let idade = 45
    let textoSaida = ""

    if (idade <= 18) {
        textoSaida = "Você é criança"
    }else if(idade > 18 && idade < 60){
        textoSaida = "Você é adulto"
    }else if (idade >= 60 && idade < 120){
        textoSaida = "Você é idoso"
    }else{
        textoSaida = "Você é uma lenda"
    }

	let saida = document.getElementById("exemplos")
	saida.innerHTML = textoSaida
}

function chamarSwitch() {

    
    let textoSaida = ""

    switch (new Date().getDay()) {
      case 0:
        textoSaida = "Domingo";
        break;
      case 1:
        textoSaida = "Segunda-feira";
        break;
      case 2:
        textoSaida = "Terça-feira";
        break;
      case 3:
        textoSaida = "Quarta-feira";
        break;
      case 4:
        textoSaida = "Quinta-feira";
        break;
      case 5:
        textoSaida = "Sexta-feira";
        break;
      case 6:
        textoSaida = "Sábado";
        break;
      default:
        textoSaida = "ops...";
    }

    let saida = document.getElementById("exemplos")
    saida.innerHTML = "Hoje é " + textoSaida
}

function chamarOperadorTernario() {

    let nome = "Fernand"
    let textoSaida = ""

    nome == "Fernanda" ? textoSaida = "O nome escolhido é Fernanda" : textoSaida = "O nome escolhido não é Fernanda"

    let saida = document.getElementById("exemplos")
    saida.innerHTML = textoSaida
}
