function jogar() {
let numeroSecreto = parseInt(Math.random() * 10 + 1);
let chute2  = document.getElementById("numero");
let tentativas = 1;
let resultado = document.getElementById("resultado1");
resultado.innerHTML = "";
let chute = parseInt(chute2);

 resultado.innerHTML = '';
 resultado.innerHTML = "e E outro numero";

while (chute != numeroSecreto) {
   
     resultado.innerHTML += `Degite o numero entre 0 e 100!`;
    
   if (chute == numeroSecreto) {
        break;
    
    }else if (chute > numeroSecreto) {
     
       resultado.innerHTML += `O numero secreto e menor ${chute}!`;
    }else {
      
         resultado.innerHTML += `O numero secreto e maior ${chute}!`;
    tentativas++;
}


let plural = tentativas > 1 ? "tentativas" : "tentativa";

resultado.innerHTML += `Parabens voce acertou o numero secreto ${numeroSecreto} com ${tentativas}  ${plural}!`;
}
}