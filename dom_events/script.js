let saida = document.getElementById("exemplos")
let textoSaida = ""

//-- Eventos de interface: --

// unload Event - Ocorre quando uma página é descarregada (ou a janela do navegador é fechada).
window.addEventListener('unload', function(){funcao("<strong>unload</strong> - Página foi descarregada")})

// load Event - Ocorre quando um objeto é carregado. É usado com mais frequência dentro do elemento <body> para executar um script depois que uma página da Web carregou completamente todo o conteúdo.
window.addEventListener('load', function(){funcao("<strong>load</strong> - Página foi carregada")})

// error Event - É acionado se ocorrer um erro durante o carregamento de um arquivo
try{
    windo.addEventListener('load', funcao("<strong>load</strong> - Página foi carregada"))
}catch{
    window.addEventListener('error', funcao("<strong>error</strong> - Erro no carremento da página"))    
}

// resize Event - Ocorre quando a janela do navegador é redimensionada.
window.addEventListener('resize', function(){funcao("<strong>resize</strong> - A janela foi redimensionada")})

// scroll Event -  Ocorre quando a barra de rolagem de um elemento está sendo rolada.
window.addEventListener('scroll', function(){funcao("<strong>scroll</strong> - A janela foi rolada")})

//-- Eventos de teclado: --

// keydown Event - Ocorre quando o usuário pressiona uma tecla no teclado
document.getElementById('entrada').addEventListener('keydown', function(){funcao("<strong>keydown</strong> - O teclado foi pressionado")})

// keyup Event - Ocorre quando o usuário libera uma tecla no teclado.
document.getElementById('entrada').addEventListener('keyup', function(){funcao("<strong>keyup</strong> - O teclado foi liberado")})

// keypress Event - ocorre quando o usuário digita um caracter no teclado.
document.getElementById('entrada').addEventListener('keypress', function(){funcao("<strong>keypress</strong> - Um caracter foi digitado")})

//-- Eventos de mouse: --
// click Event -  Ocorre quando o usuário clica em um elemento HTML 
document.getElementById('botao').addEventListener('click', function(){funcao("<strong>click</strong> - O botão foi clicado")})

// dblclick Event - Ocorre quando o usuário clica duas vezes em um elemento HTML.
document.getElementById('botao').addEventListener('dblclick', function(){funcao("<strong>dblclick</strong> - O botão foi clicado duas vezes")})

// mousedown Event - Ocorre quando um botão do mouse é pressionado sobre um elemento HTML.
document.getElementById('botao').addEventListener('mousedown', function(){funcao("<strong>mousedown</strong> - O botão foi pressionado")})

// mouseup Event - Ocorre quando um botão do mouse é liberado sobre um elemento.
document.getElementById('botao').addEventListener('mouseup', function(){funcao("<strong>mouseup</strong> - O botão foi solto")})

// mousemove Event - Ocorre quando o mouse se move sobre um elemento.
document.getElementById('botao').addEventListener('mousemove', function(){funcao("<strong>mousemove</strong> - O mouse foi movimentado sobre o botão")})

// mouseover Event - Ocorre quando o ponteiro do mouse entra em um elemento.
document.getElementById('botao').addEventListener('mouseover', function(){funcao("<strong>mouseover</strong> - O mouse foi colocado sobre o botão")})

// mouseout Event - Ocorre quando o ponteiro do mouse sai de um elemento.
document.getElementById('botao').addEventListener('mouseout', function(){funcao("<strong>mouseout</strong> - O mouse foi colocado fora do botão")})

//-- Eventos de Focus e Blur --
// focus Event - Ocorre quando um elemento recebe o foco.
document.getElementById('entrada').addEventListener('focus', function(){funcao("<strong>focus</strong> - O elemento recebeu o foco")})

// blur Event - Ocorre quando um elemento HTML perde o foco .
document.getElementById('entrada').addEventListener('blur', function(){funcao("<strong>blur</strong> - O elemento perdeu o foco")})

//-- Eventos de formulário: --

// input Event - Ocorre quando o valor de um elemento <input> ou <textarea> é alterado.
document.getElementById('entrada').addEventListener('input', function(){funcao("<strong>input</strong> - O campo de entrada foi alterado")})

// cut Event - Ocorre quando o usuário corta o conteúdo de um elemento.
document.getElementById('entrada').addEventListener('cut', function(){funcao("<strong>cut</strong> - O conteúdo foi recortado")})

// copy Event - Ocorre quando o usuário copia o conteúdo do elemento.
document.getElementById('entrada').addEventListener('copy', function(){funcao("<strong>copy</strong> - O conteúdo foi copiado")})

// paste Event - Ocorre quando o usuário cola algum conteúdo em um elemento.
document.getElementById('entrada').addEventListener('paste', function(){funcao("<strong>paste</strong> - O conteúdo foi colado")})

// select Event - Ocorre depois que algum texto foi selecionado em um elemento.
document.getElementById('entrada').addEventListener('select', function(){funcao("<strong>select</strong> - O conteúdo foi selecionado")})

// change Event - Ocorre quando o valor de um elemento é alterado. Os elementos para este evento são: select, radio e checkbox.
document.getElementById('checkbox').addEventListener('change', function(){funcao("<strong>change</strong> - O checkbox foi alterado")})

// submit Event - Ocorre quando um formulário é enviado.
document.getElementById('formulario').addEventListener('submit', enviar)

// reset Event - Ocorre quando um formulário é redefinido.
document.getElementById('formulario').addEventListener('reset', function(){funcao("<strong>reset</strong> - O formulário foi apagado")})

function funcao(string){
    textoSaida += 
    `${string}<br>
     `
    saida.innerHTML = textoSaida
}

function enviar(event){
    event.preventDefault()
    funcao("<strong>submit</strong> - O formulário foi enviado")
}
