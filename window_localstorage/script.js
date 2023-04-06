let saida = document.getElementById("exemplos")

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

function salvarDados() {   

    const objetoPessoa = new Pessoa("Fernanda", 1977)
    localStorage.setItem("nome", objetoPessoa.nome);
    localStorage.setItem("nascimento", objetoPessoa.nascimento);
    localStorage.setItem("idade", objetoPessoa.calcularIdade());

    saida.innerHTML = `Dados gravados com sucesso: A pessoa é ${localStorage.getItem("nome")}, nascida em ${localStorage.getItem("nascimento")} e com ${localStorage.getItem("idade")} anos.`
}

function lerDados() {  

    if (localStorage.getItem("nome") == null && localStorage.getItem("nascimento") == null && localStorage.getItem("idade") == null ) {
      saida.innerHTML = `Dados não localizados`
    }else if (localStorage.getItem("nascimento") == null && localStorage.getItem("idade") == null){
      saida.innerHTML = `A pessoa é ${localStorage.getItem("nome")}, mas não quis revelar a idade`
    }else{
      saida.innerHTML = `A pessoa é ${localStorage.getItem("nome")}, nascida em ${localStorage.getItem("nascimento")} e com ${localStorage.getItem("idade")} anos.`
    }
}


function removerDados() {  

    localStorage.removeItem("nascimento") 
    localStorage.removeItem("idade") 

    if (localStorage.getItem("nome") == null && localStorage.getItem("nascimento") == null && localStorage.getItem("idade") == null ) {
      saida.innerHTML = `Dados não localizados`
    }else{
      saida.innerHTML = `Dados removidos: A pessoa é ${localStorage.getItem("nome")}, mas não quis revelar a idade`
    }
}


function limparDados() {  

    localStorage.clear() 
    saida.innerHTML = `Dados excluídos com sucesso`
}

