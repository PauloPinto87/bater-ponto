let idUltRegEnt = (localStorage.length) - 3
let registros = document.getElementById('registros')
let totalTempoTrabalho = 0


for (index = 1;index <= idUltRegEnt; index ++) {
     registros.innerHTML += `<p>${localStorage.getItem(index)}</p>`


    if (((localStorage.getItem(index).substring(localStorage.getItem(index).indexOf('m')+2,)).length) == 2) {
        totalTempoTrabalho = totalTempoTrabalho + Number(((localStorage.getItem(index).substring(localStorage.getItem(index).indexOf('m')+2,))).substring(0, 1))

    } else {
        totalTempoTrabalho = totalTempoTrabalho + Number(((localStorage.getItem(index).substring(localStorage.getItem(index).indexOf('m')+2,))).substring(0, 2))
    }
}

console.log(totalTempoTrabalho)