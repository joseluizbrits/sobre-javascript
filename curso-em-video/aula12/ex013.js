var agora = new Date()
var dia_da_semana = agora.getDay()
/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sabádo
*/
switch(dia_da_semana) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Segunda')
        break
    case 3:
        console.log('Segunda')
        break
    case 4:
        console.log('Segunda')
        break
    case 5:
        console.log('Segunda')
        break
    case 6:
        console.log('Segunda')
        break
    default:
        console.log('[ERRO] Dia inválido!')
}