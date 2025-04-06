var idade = 18
console.log(`Você tem ${idade} anos.`)

if (idade < 16) {
    console.log('Não vota');
} else {
    if (idade < 18 || idade > 65) {
        console.log('Voto Opcional');
    } else{
        console.log('Voto Obrigatorio')
    }
}

// verificando horas

var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas.`)

if (hora < 12) {
    console.log('Bom Dia!')
}else if (hora <= 18) {
    console.log('Boa Tarde!')
}
else {
    console.log('Boa Noite!')
}

// verificando condição multipla 

var agora = new Date()
var diaSem = agora.getDay()
console.log(diaSem)
/*
    0  = Domingo
    1  = Segunda
    2  = Terça
    3  = Quarta
    4  = Quinta
    5  = Sexta
    6  = Sábado
*/

switch (diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
}