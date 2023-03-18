//Opção 1 - Exemplo de criação de classe e objeto
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

    let saida = document.getElementById("exemplos")
    saida.innerHTML = `A pessoa é ${objetoPessoa.nome}, nascida em ${objetoPessoa.nascimento} e com ${objetoPessoa.calcularIdade()} anos.`
}

/*Opção 2 - Exemplo de Notação Literal de objeto
const objetoPessoa = {

   nome       : "Fernanda",
   nascimento : 1977,

   calcularIdade: function(){
      const dataAtual = new Date();
      return dataAtual.getFullYear() - this.nascimento;
    }
  }

function gerarObjetoPessoa() {  

  let saida = document.getElementById("exemplos")
  saida.innerHTML = `A pessoa é ${objetoPessoa.nome}, nascida em ${objetoPessoa.nascimento} e com ${objetoPessoa.calcularIdade()} anos.`
}
*/

/*Opção 3 - Exemplo de Notação de Construtor (objeto em branco)
const objetoPessoa = new Object()

objetoPessoa.nome       = "Fernanda"
objetoPessoa.nascimento = 1977
objetoPessoa.calcularIdade = function(){
      const dataAtual = new Date();
      return dataAtual.getFullYear() - this.nascimento;    
}

function gerarObjetoPessoa() {  

  let saida = document.getElementById("exemplos")
  saida.innerHTML = `A pessoa é ${objetoPessoa.nome}, nascida em ${objetoPessoa.nascimento} e com ${objetoPessoa.calcularIdade()} anos.`
}
*/