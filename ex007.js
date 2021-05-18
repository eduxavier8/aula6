var agora = new Date()
var hora = agora.getHours()
console.log(`Agora sao ${hora} horas.`)
if(hora < 12){
    console.log('bom dia sua safada!')
} else if (hora <= 18){
    console.log('Boa tarde vadia puta!')
} else if ( hora <= 24){
    console.log('boa noite cadela!')
}