function carregar() {
   
    var msg = document.getElementById(`msg`)
    var foto = document.getElementById(`img`)
    var data = new Date()
    
    var res = document.getElementById('res') 
    var semana = data.getDay();
    
    var hora = data.getHours()
    //var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12 ) {
    //BOM DIA 
   foto.src = `dia.webp`
  
}else if (hora >= 12 && hora < 18){
    //BOA TARDE
    foto.src = `tarde.jpg`
    document.body.style.background = 'orange'}


    else{foto.src = `noite.png`
    document.body.style.background = 'black'
    //BOA NOITE
   }
   
   
   switch (semana) {
    case 0:
          res.innerHTML += "Domingo dia de procrastinar!🔥";
        break;
    case 1:
        res.innerHTML += "Segunda-feira dia de trabalhar!👨‍💼";
        break;
    case 2:
        res.innerHTML += "Terça-feira vamo que vamo!👨‍💻";
        break;
    case 3:
        res.innerHTML += "Quarta-feira metade da semana!😶‍🌫️";
        break;
    case 4:
        res.innerHTML += "Quinta-feira quase lá!😩";
        break;
    case 5:
        res.innerHTML += "Sexta-feira hora de to,mar uma breja!🍻";
        break;
    case 6:
        res.innerHTML += "Sábado dia de descanso!🛌🏻";
        break;
}
}


