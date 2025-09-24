function clicar() {
var input1 = document.querySelector('div#inp1');
var input2 = document.querySelector('div#inp2');
var input3 = document.querySelector('div#inp3');

var input1 = Number(input1.value);
var input2 = Number(input2.value);
var input3 = Number(input3.value);

var mensagem = document.querySelector('div#msg');

var mensagem2 = document.querySelector('div#msg2');

var mensagem3 = document.querySelector('div#msg3');
mensagem.innerHTML = "Contando:";
mensagem.style.color = 'black';

var cont = document.getElementById('conteudo');

cont.style.height = "65vh";
mensagem2.innerHTML = ``

  if (input1.value === ` || input2.value === ` || input3.value === ``) {
    mensagem.style.color = ('red')
    mensagem.innerHTML = `Por favor preencha todos os campos.` 
return;}

 else {
    if (input_3 === 0) {
  window.alert('Impossível contar com o passo 0! Considerando o passo como 1')}
 }

for (input_1; input_1 <= input_2; input_1 = input_1 + 1) {
mensagem2.innerHTML += `${input_1}`

}if (input_1 == input_2) {
mensagem3.innerHTML = "";

}else{

for (input_1; input_1 <= input_2;

input_1 = input_1 + input_3) {

mensagem2.innerHTML += `${input_1}`;}

if (input_1 == input_2) {
mensagem3.innerHTML = "x";

}

}
}
