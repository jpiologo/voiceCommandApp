const elementoChute = document.getElementById('chute');
const telaDeInicio = document.getElementById('tela-inicio');
const btnIniciaJogo = document.getElementById('iniciar-jogo');
const telaDeChutes = document.getElementById('tela-de-chutes');

btnIniciaJogo.addEventListener('click', () => {

    btnIniciaJogo.classList.add('hide');

    telaDeInicio.classList.add('hide');

    telaDeChutes.classList.remove('hide');
    
    window.SpeechRecognition = window.SpeechRecognition || 
    webkitSpeechRecognition;
    
    const recognition = new SpeechRecognition();
    recognition.lang = 'pt-Br'
    recognition.start()
    
    recognition.addEventListener('result', onSpeak)
    
    function onSpeak(e) {
        chute = e.results[0][0].transcript
        exibeChuteNaTela(chute)
        validaChute(chute)
    }
    
    function exibeChuteNaTela(chute) {
        elementoChute.innerHTML = `
            <div>Seu chute: </div>
            <span class="box">${chute}</span>
        `
    }
    
    recognition.addEventListener('end', () => recognition.start())
})
