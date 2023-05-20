let idUltRegEnt = (localStorage.length) - 3
let registros = document.getElementById('registros')
let totalTempoTrabalho = 0


for (index = 1;index <= idUltRegEnt; index ++) {

     registros.innerHTML += `<p>ID:${index} - ${localStorage.getItem(index)}</p>`
/*     if (((localStorage.getItem(index).substring(localStorage.getItem(index).indexOf('m')+2,)).length) == 2) {
        totalTempoTrabalho = totalTempoTrabalho + Number(((localStorage.getItem(index).substring(localStorage.getItem(index).indexOf('m')+2,))).substring(0, 1))

    } else {
        totalTempoTrabalho = totalTempoTrabalho + Number(((localStorage.getItem(index).substring(localStorage.getItem(index).indexOf('m')+2,))).substring(0, 2))
    } */
}


let somaSegundos = 0
let somaMinutos = 0
let somaHoras = 0
let paragrafos = registros.getElementsByTagName('p')

for (index = 0; index <= registros.childNodes.length-2; index++) {
    let paragrafo = paragrafos[index].innerText

    if (/(\d+)\/(\d+) - (\d+)h:(\d+)m:(\d+)s/.test(paragrafo)){
        const [,dia, mes, horas, minutos, segundos] = paragrafo.match(/(\d+)\/(\d+) - (\d+)h:(\d+)m:(\d+)s/);

        somaSegundos += Number(segundos)
        somaMinutos += Number(minutos)
        somaHoras += Number(horas)

        if (somaSegundos >= 60) {
            somaSegundos = somaSegundos - 60
            somaMinutos += 1
        }
        if (somaMinutos >= 60) {
            somaMinutos = somaMinutos - 60
            somaHoras += 1
        }

/*      console.log('Dia:', dia);
        console.log('Mês:', mes);
        console.log('Horas:', horas);
        console.log('Minutos:', minutos);
        console.log('Segundos:', segundos); */
    }
}


let resumoDiv = document.getElementById('resumo')

resumoDiv.innerHTML = `Total de ${somaHoras} horas, ${somaMinutos} minutos e ${somaSegundos}segundos.`


function exportarHorarios() {
    //Cria o  link para o download
    registros = document.getElementById('registros').textContent
    var elementoLink = document.createElement('a')

    console.log(registros)

    elementoLink.setAttribute('href', 'data:text/plain;charset=utf-8' + encodeURIComponent(registros))

    elementoLink.setAttribute('download', 'registrosPonto.txt')

    elementoLink.style.display = 'none'

    document.body.appendChild(elementoLink)

    elementoLink.click()

    document.body.removeChild(elementoLink)

}