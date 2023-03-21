class Pessoa { //Superclasse ou classe pai
  constructor(nome, nascimento) {
    this.nome       = nome;
    this.nascimento = nascimento;
  }

  calcularIdade(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.nascimento;
  }
}

class Crianca extends Pessoa{ //Classe filha
  constructor(nome, nascimento, brinquedo){
    super(nome, nascimento)
    this.brinquedo = brinquedo
  }
calcularIdade(){
    return "uma criança de " + super.calcularIdade() + " anos"
  }
}

class Adulto extends Pessoa{ //Classe filha
  constructor(nome, nascimento, profissao){
    super(nome, nascimento)
    this.profissao = profissao
  }
  calcularIdade(){
    return "um adulto de " + super.calcularIdade() + " anos"
  }
}

function gerarObjetoPessoa() {   

    const objetoPessoa = new Pessoa("Fernanda", 1977)
    const objetoCrianca = new Crianca("Maria", 2020, "Boneca")
    const objetoAdulto = new Adulto("Daniel", 1974, "Jornalista")

    let saida = document.getElementById("exemplos")

    saida.innerHTML = 
    `A pessoa é ${objetoPessoa.nome}, nascida em ${objetoPessoa.nascimento} e com ${objetoPessoa.calcularIdade()} anos.<br>
     A pessoa é ${objetoCrianca.nome}, nascida em ${objetoCrianca.nascimento} e ela é ${objetoCrianca.calcularIdade()}. O brinquedo favorito é ${objetoCrianca.brinquedo}<br>
     A pessoa é ${objetoAdulto.nome}, nascida em ${objetoAdulto.nascimento} e ela é ${objetoAdulto.calcularIdade()}. A profissão é ${objetoAdulto.profissao}<br>
    `
}
