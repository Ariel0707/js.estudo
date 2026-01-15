alert("Seja bem vindo! (a) ao jogo do numero secreto!");
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute  ;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = parseInt(prompt("Digite um numero entre 1 e 100:"));
    if (chute == numeroSecreto) {
        break;
    }else if (chute > numeroSecreto) {
        alert(`O numero secreto e menor ${chute}!`);
    }else {
        alert(`O numero secreto e maior ${chute}!`);
    }
    tentativas++;
}
let primera = tentativas > 1 ? "tentativa" : "tentativas";
alert(`Parabens voce acertou o numero secreto ${numeroSecreto} com ${tentativas}  tentativas!`);