// As variáveis globais ficam fora para não resetarem a cada clique
let numeroSecreto = Math.floor(Math.random() * 100) + 1; // Agora entre 1 e 100
let tentativas = 1;

function jogar() {
    let chute2 = document.getElementById("numero");
    let chute = parseInt(chute2.value); // Pega o VALOR do input
    let resultado = document.getElementById("resultado1");

    // Validação simples
    if (isNaN(chute)) {
        resultado.innerHTML = "Por favor, digite um número válido.";
        return;
    }

    if (chute === numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        resultado.innerHTML = `✅ Parabéns! Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`;
        
        // Opcional: Reiniciar o jogo após alguns segundos ou criar um botão de reset
    } else {
        if (chute > numeroSecreto) {
            resultado.innerHTML = `❌ O número secreto é menor que ${chute}. Tente novamente!`;
        } else {
            resultado.innerHTML = `❌ O número secreto é maior que ${chute}. Tente novamente!`;
        }
        tentativas++;
    }

    // Limpa o campo de input para a próxima tentativa
    chuteInput.value = "";
    chuteInput.focus();
}