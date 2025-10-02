let num = document.querySelector(`input#frun`)
let liste = document.querySelector(`select#flista`)
let res = document.querySelector(`div#res`)
let valores = []

function isNumero(n){
    if(Number(n)>= 1 && Number(n) <= 100) {
        return true

    }else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
   }

function Adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
       valores.push(Number(num.value))
       let item = document.createElement(`option`)
       item.text = `Valor ${num.value}`
       liste.appendChild(item)

    }else{
        window.alert(`Valor invalido ou ja encontrado na lsta`)
    }
    num.value = ``
    num.focus()
}
