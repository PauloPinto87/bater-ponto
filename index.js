const visorPontoBatido = document.getElementById('visor-ponto-batido')
const visorDescanso = document.getElementById('visor-descanso')
let idUltRegEnt = localStorage.length-2


if (localStorage.getItem('Working') == null) {
    localStorage.setItem('Working', false)
    visorPontoBatido.classList.toggle('hide')
} else {
    if (localStorage.getItem('Working') == 'true') {
        visorDescanso.classList.toggle('hide')
    } else {
        visorPontoBatido.classList.toggle('hide') 
    }
}


function entrada() {
    if (localStorage.getItem('Working') == 'true') {
        alert('Já está com o ponto batido!')
    } else {
        localStorage.setItem('Working', true)
        visorDescanso.classList.toggle('hide')
        visorPontoBatido.classList.toggle('hide')

        //Guarda o momento da entrada no localStorage como uma string no formato ISO
        let momentoEntrada = new Date()
        localStorage.setItem('momentoEntrada', momentoEntrada.toISOString())

    }


}

function saida() {
    if (localStorage.getItem('Working') == 'false') {
        alert('Já está descansando!')
    } else {
        localStorage.setItem('Working', false)
        visorPontoBatido.classList.toggle('hide')
        visorDescanso.classList.toggle('hide')

        //Guarda o momento da saida no localStorage como uma string no formato ISO
        momentoSaida = new Date()
        localStorage.setItem('momentoSaida', momentoSaida.toISOString())

        let entradaString = localStorage.getItem('momentoEntrada')
        let saidaString = localStorage.getItem('momentoSaida')
        let momentoEntrada = new Date(Date.parse(entradaString))
        let momentoSaida = new Date(Date.parse(saidaString))
    
        let diff = momentoSaida.getTime() - momentoEntrada.getTime()
    
    
        let segundos = Math.round(diff / 1000) % 60
        let minutos = Math.floor(diff / 1000 / 60) % 60
        let horas = Math.floor(diff / 1000 / 60 / 60)
    
        console.log(`Em milesegundos é: ${diff}`)
        console.log(`A diferença é de ${horas} horas, ${minutos} minutos e ${segundos} segundos.`);
    
        let idUltRegEnt = localStorage.length-2
    
        localStorage.setItem(idUltRegEnt, `${momentoEntrada.getDate()}/${momentoEntrada.getMonth()} - ${horas}h:${minutos}m:${segundos}s`)
    }


}
