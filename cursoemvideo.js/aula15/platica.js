let num  = [5,8,4,6,7]
num.sort()
num.push(1)
console.log(num)
console.log(`O valor tem ${num.length} posições
`)
console.log(`O primeiro valor é ${num[0]}
`)
let pos = num.indexOf(8)
if(pos == -1){
    console.log(`O valor não foi encontrado`)
}else{
    console.log(`O valor está na posição ${pos}`) }


    for(let pos=0; pos < num.length; pos++){
        console.log(`A posição ${pos} tem o valor ${num[pos]}`)
    }

    for(let pos in num){
        console.log(`A posição ${pos} tem o valor ${num[pos]}`)
    }
