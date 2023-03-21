class Pessoa {
  constructor() {
    this._nome       = "";
    this._nascimento = 0;
  }

  get nome(){
    return this._nome
  }

  set nome(nome){
    this._nome = nome
  }

  get nascimento(){
    return this._nascimento
  }

  set nascimento(nascimento){
    this._nascimento = nascimento
  }

  calcularIdade(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.nascimento;
  }
}

function gerarObjetoPessoa() {   

    const objetoPessoa = new Pessoa()
    objetoPessoa.nome = "Fernanda"
    objetoPessoa.nascimento = 1977

    let saida = document.getElementById("exemplos")
    saida.innerHTML = `A pessoa é ${objetoPessoa.nome}, nascida em ${objetoPessoa.nascimento} e com ${objetoPessoa.calcularIdade()} anos.`
}
