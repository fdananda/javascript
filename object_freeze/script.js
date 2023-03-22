class Pessoa {
  constructor(nome, nascimento) {
    this.nome       = nome;
    this.nascimento = nascimento;
  }

  calcularIdade(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.nascimento;
  }
}

function gerarObjetoPessoa() {   

    const objetoPessoa = new Pessoa("Fernanda", 1977)
    
    Object.freeze(objetoPessoa)
    objetoPessoa.nome = "Daniel"
    objetoPessoa.nascimento = 1974

    let saida = document.getElementById("exemplos")
    saida.innerHTML = `A pessoa é ${objetoPessoa.nome}, nascida em ${objetoPessoa.nascimento} e com ${objetoPessoa.calcularIdade()} anos.`
}
