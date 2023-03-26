let saida = document.getElementById("exemplos")
let textoSaida = ""

function mostrarDataAtual() {
    let dataAtual = new Date()

    let dia 		= dataAtual.getDate()
    let mes  		= dataAtual.getMonth() + 1
    let ano			= dataAtual.getFullYear()
    let dataFormatada = dia + "/" + mes + "/" + ano

	let hora = dataAtual.getHours()
    let minuto = dataAtual.getMinutes()
    let segundo = dataAtual.getSeconds()
    let horaFormatada = hora + ":" + minuto + ":" + segundo
    
	saida.innerHTML = "Data e hora atual: " + dataFormatada + " - " + horaFormatada
}

function chamarFuncaoDate(){

    const date = new Date()

    //Método getDate() - Retorna o dia do mês (1 a 31) de uma data.
    let date_getdate = date.getDate()

    //Método getDay() - Retorna o dia da semana (0 a 6) de uma data.
    let date_getday = date.getDay()

    //Método getFullYear() - Retorna o ano  com 4 dígitos de uma data.
    let date_getFullYear = date.getFullYear()

    //Método getHours() - Retorna a hora (0 a 23) de uma data.
    let date_getHours = date.getHours()

    //Método getMilliseconds() - Retorna os milissegundos (0 a 999) de uma data.
    let date_getMilliseconds = date.getMilliseconds()

    //Método getMinutes() - Retorna os minutos (0 a 59) de uma data.
    let date_getMinutes = date.getMinutes()

    //Método getMonth() - Retorna o mês (0 a 11) de uma data.
    let date_getMonth = date.getMonth() + 1

    //Método getSeconds() - Retorna os segundos (0 a 59) de uma data.
    let date_getSeconds = date.getSeconds()

    //Método getTime() - Retorna o número de milissegundos desde 1º de janeiro de 1970 00:00:00.
    let date_getTime = date.getTime()

    //Método getTimezoneOffset() - Retorna a diferença, em minutos, entre a hora UTC e a hora local.
    let date_getTimezoneOffset = date.getTimezoneOffset()

    //Método setDate() - Define o dia do mês de uma data.
    date.setDate(25)
    let date_setDate_25 = date

    //Método setFullYear() - Define o ano de uma data.
    date.setFullYear(1977)
    let date_setFullYear_1977 = date

    //Método setHours() - Define a hora de uma data.
    date.setHours(20)
    let date_setHours_20 = date

    //Método setMilliseconds() - Define os milissegundos de uma data.
    date.setMilliseconds(12)
    let date_setMilliseconds_00 = date

    //Método setMilliseconds() - Define os milissegundos de uma data.
    date.setMinutes(59)
    let date_setMinutes_59 = date

    //Método setMonth() - Define o mês de um objeto de data.
    date.setMonth(7)
    let date_setMonth_7 = date

    //Método setSeconds() - Define os segundos de um objeto de data.
    date.setSeconds(30)
    let date_setSeconds_30 = date

    //Método toDateString() - Retorna a data de um objeto de data como uma string.
    let date_toDateString = date.toDateString()

    //Método toISOString() - Retorna um objeto de data como uma string, usando o padrão ISO.
    let date_toISOString = date.toISOString()

    //Método toJSON() -  Retorna um objeto de data como uma string formatada como uma data JSON.
    let date_toJSON = date.toJSON()

    //Método toLocaleDateString() - Retorna a data de um objeto de data como uma string, usando convenções de localidade.
    let date_toLocaleDateString = date.toLocaleDateString()

    //Método toLocaleTimeString() - Retorna a parte de tempo de um objeto de data como uma string, usando convenções de localidade.
    let date_toLocaleTimeString = date.toLocaleTimeString()

    //Método toLocaleString() - Retorna um objeto Date como uma string, usando configurações de localidade.
    let date_toLocaleString = date.toLocaleString()

    //Método toString() - Retorna um objeto de data como uma string
    let date_toString = date.toString()

    //Método toTimeString() - Retorna a parte do tempo de um objeto de data como uma string.
    let date_toTimeString = date.toTimeString()

    textoSaida = 
    `date = ${date}<br>
     date_getDate = ${date_getdate}<br>
     date_getDay = ${date_getday}<br>
     date_getFullYear = ${date_getFullYear}<br>
     date_getHours = ${date_getHours}<br>
     date_getMilliseconds = ${date_getMilliseconds}<br>
     date_getMinutes = ${date_getMinutes}<br>
     date_getMonth = ${date_getMonth}<br>
     date_getSeconds = ${date_getSeconds}<br>
     date_getTime = ${date_getTime}<br>
     date_getTimezoneOffset = ${date_getTimezoneOffset}<br>
     date_setDate_25 = ${date_setDate_25}<br>
     date_setFullYear_1977 = ${date_setFullYear_1977}<br>
     date_setHours_20 = ${date_setHours_20}<br>
     date_setMilliseconds_00 = ${date_setMilliseconds_00}<br>
     date_setMinutes_59 = ${date_setMinutes_59}<br>
     date_setMonth_7 = ${date_setMonth_7}<br>
     date_setSeconds_30 = ${date_setSeconds_30}<br>
     date_toDateString = ${date_toDateString}<br>
     date_toISOString = ${date_toISOString}<br>
     date_toJSON = ${date_toJSON}<br>
     date_toLocaleDateString = ${date_toLocaleDateString}<br>
     date_toLocaleTimeString = ${date_toLocaleTimeString}<br>
     date_toLocaleString = ${date_toLocaleString}<br>
     date_toString = ${date_toString}<br>
     date_toTimeString = ${date_toTimeString}<br>
     `

    saida.innerHTML = textoSaida
}