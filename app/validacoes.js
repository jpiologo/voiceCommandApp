function validaChute() {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido!</div>'
        return
    }

    if (numeroForMaiorOuMenorQue(numero)){
        elementoChute.innerHTML += `
            <div>Valor inválido! Escolha um valor entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Isso aí, você acertou o número secreto! 🥳</h2>

            <button id="jogar-novamente" class="btn btn-jogar-novamente">JOGAR NOVAMENTE</button>
        ` 
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-turn-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-turn-up"></i></div>
        `
    }

}

function chuteForInvalido(numero) {
    if (chute.toUpperCase() === "GAME OVER"){
        document.body.innerHTML = `
            <h2>GAME OVER!!</h2>
            <button id="jogar-novamente" class="btn btn-jogar-novamente">JOGAR NOVAMENTE</button>
        `
        document.body.style.backgroundColor = "black";
    }
    else {
        return Number.isNaN(numero);
    }
    
}


function numeroForMaiorOuMenorQue(numero){
    return numero > maiorValor || numero < menorValor 
}

document.body.addEventListener('click', e => {
    if (e.target.id == "jogar-novamente") {
        window.location.reload()
    }
})