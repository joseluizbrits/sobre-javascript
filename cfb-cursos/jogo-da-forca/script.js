var lista = ['freira', 'esponja', 'ensinar', 'segundos', 'universidade', 'translucidar', 'berinjela', 'tração', 'ervilha', 'estranho', 'sujo', 'mimo', 'tapete', 'ornitorrinco', 'boliche', 'fresca', 'caneca', 'monarquia', 'soldar', 'funicular', 'alfabeto', 'sinfonia', 'enterrar', 'festival', 'lagosta', 'girino', 'irrigar', 'amazona', 'fonte', 'varinha', 'rosnar', 'palavra', 'corso', 'aquecimento', 'mula', 'roubo', 'apaziguar', 'desentendimento', 'ressentimento', 'estrangeiro', 'essencial', 'semente', 'cenoura', 'milharal', 'inflar', 'cavalheiro', 'desinfetante', 'mural', 'estoque']

var qntd_palavras = lista.length - 1
var num = Math.floor(Math.random() * qntd_palavras)
var palavra = lista[num]
var tam = palavra.length
var erro = 0
var tentativas = []
var br = document.createElement('br')

function iniciar() {
    btnIni = document.getElementById('btnIni')
    for (l = 0; l < tam; l++) {
        var div = document.createElement('div')
        letra = div.innerHTML = palavra[l]
        div.style.color = 'white'
        div.setAttribute('class', 'letras')
        div.setAttribute('id', `letra${l}`)
        document.body.insertBefore(div, btnIni)
    }
    btnIni.remove()
    input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('class', 'caixa')
    input.setAttribute('id', 'letra_player')
    input.setAttribute('maxlength', '1')
    input.autofocus = true  // cursor no input
    document.body.appendChild(br)
    document.body.appendChild(input)
    var btnVer = document.createElement('button')
    btnVer.innerHTML = 'Verificar'
    btnVer.setAttribute('id', 'btnVer')
    btnVer.setAttribute('onclick', 'verificar()')
    document.body.appendChild(btnVer)
    var p = document.createElement('p')
    p.setAttribute('id', 'tentativas')
    document.body.appendChild(p)
}

function verificar() {
    var letra_player = input.value
    if (letra_player == '') {
        alert('Escolha uma letra antes de verificar!')
    } else {
        var c = 0
        for (var l in palavra) {
            var div = document.getElementById(`letra${l}`)
            var letra = div.innerHTML
            if (letra == letra_player) {
                div.style.color = 'black'
                c++
            }
        }
        if (c == 0) {
            erro++
            if (erro < 7) {
                alert(`Puts, você errou! Tente uma nova letra!`)
                tentativas.push(letra_player)
                var p = document.getElementById('tentativas')
                p.innerHTML = ''
                p.innerHTML = 'Tentativas: ' + tentativas
                inserirImg()
            } else {
                inserirImg()
            }
        } else if (c > 0) {
            alert(`Boa! Essa você acertou!`)
        }
        input.value = ''    // limpando o input
        input.focus()
    }
}

function inserirImg() {
    if (erro > 1) {
        document.getElementById('erro').remove()
        var img = document.createElement('img')
        img.setAttribute('src', 'imagens/erro'+erro+'.png')
        img.setAttribute('id', 'erro')
        document.body.appendChild(img)
    } else {
        var img = document.createElement('img')
        img.setAttribute('src', 'imagens/erro1.png')
        img.setAttribute('id', 'erro')
        document.body.appendChild(img)
    }
}