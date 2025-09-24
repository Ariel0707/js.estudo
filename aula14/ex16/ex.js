function Gerar_Tabuada(){
    var numero = document.querySelector(`div#ext1`)
    var resultado = document.querySelector^(`div#res`)
    var num = Number(numero.value)

    if (numero.value.length == 0 | num == 0 ){
        window.alert(`[ERRO] Digite um número válido!`)
        resultado.innerHTML = ``
    }else{
        fo(var C = numero; C <=10; C ++){
        resultado.innerHTML = += '${C} x ${num} = ${C*num}<br'>
        }
    }



}
