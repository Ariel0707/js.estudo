function carregar() {

var msg = window.document.getElementById('msg')
var foto = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 17
msg.innerHTML = ` Agora são ${hora} horas.`

if (hora>= 0 && hora < 12){

foto.src = 'dia22.jpg'

} else if (hora >= 12 && hora < 18) {
foto.src = 'tarde.jpg'

document.body.style.background = 'orange'}

else {imagem.src = 'noite.png'
document.body.style.background = 'black'
}

}

