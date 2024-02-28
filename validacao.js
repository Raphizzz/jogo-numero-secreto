function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute

        if(numeroForInvalido(numero)) {
             elementoChute.innerHTML += `<div>Valor Inválido, Digite um número</div>`
        }

        if(numeroForaDoEscopo(numero)){
            elementoChute.innerHTML += `Valor Fora do Escopo Permitido, Escolha um Número Entre ${menorValor} e ${maiorValor}`
        }
        if (numero === numeroSecreto){
        
            document.body.innerHTML = `
            <h2> Parabéns, Você acertou ! </h2>
            <h3> O Número Secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
            `
        } else if(numeroSecreto > numero){
    
            elementoChute.innerHTML += 
            `
            <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
            `

        }    
         else if(numeroSecreto < numero){

            elementoChute.innerHTML += 
            `
            <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
            `
        } 
} 

function numeroForInvalido(numero){
    return Number.isNaN(numero)
}

function numeroForaDoEscopo(numero){
    return numero > maiorValor || numero < menorValor
}


document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})