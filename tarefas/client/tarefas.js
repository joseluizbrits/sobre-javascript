let numero_de_caixas = -1

let dadosDisciplina = {
    nome: '',
    fta: true,
    a1: false,
    a2: false
}

let statusDados = {
    aFazer: [],
    fazendo: [],
    quaseFeito: [],
    feito: []
}

let notas = {
    inputs: [],
    valores: [],
    notasFinal: []
}

const input_dificuldades = []
const inputs = document.getElementsByClassName('inputs_inserir')
const barraStatus = document.querySelector('#status')
const caixa_inserir = document.querySelector('#caixa_inserir')
const caixa_statusOpcoes = document.querySelector('#div--fantasma')
const btn_fechar = document.querySelector('#fecharCaixaInserir')
const btn_inserir = document.querySelector('#btn_inserir')
const btn_abrirCaixa = document.querySelector('#abrir_caixaInserir')
const filhos_statusOpcoes = [...caixa_statusOpcoes.children]
const statusOpcoes = filhos_statusOpcoes.filter((e) => e.tagName !== 'SPAN')

btn_abrirCaixa.addEventListener('click', mostrarCaixaInserir)

function mostrarCaixaInserir() {
    
    caixa_inserir.style.display = 'block'

    btn_fechar.addEventListener('click', () => {
        caixa_inserir.style.display = 'none'
        inputs[0].value = ''
        inputs[1].checked = true
        inputs[2].checked = false
        inputs[3].checked = false
    })

    btn_inserir.addEventListener('click', (e) => {
        
        if (inputs[0].value === '') {
            alert('Preencha o nome da disciplina pelo menos')
            e.stopImmediatePropagation()
        }
        
        else {
            dadosDisciplina = {
                nome: inputs[0].value,
                fta: inputs[1].checked,
                a1: inputs[2].checked,
                a2: inputs[3].checked
            }

            criarCaixaDisciplina()
            
            inputs[0].value = ''
            inputs[1].checked = true
            inputs[2].checked = false
            inputs[3].checked = false
            caixa_inserir.style.display = 'none'

            e.stopImmediatePropagation()
        }
    })
}

function criarCaixaDisciplina() {

    // Criando os elementos
    const div = document.createElement('div')
    const titulo =  document.createElement('h2')
    const media = document.createElement('h2')
    const situacao = document.createElement('h2')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')
    const p4 = document.createElement('p')
    const p5 = document.createElement('p')
    const p6 = document.createElement('p')
    const input1 = document.createElement('input')
    const input2 = document.createElement('input')
    const input3 = document.createElement('input')
    const input4 = document.createElement('input')
    const input5 = document.createElement('input')
    const input6 = document.createElement('input')
    const input7 = document.createElement('input')
    const input8 = document.createElement('input')
    const input9 = document.createElement('input')
    const span1 = document.createElement('span')
    const span2 = document.createElement('span')
    const span3 = document.createElement('span')

    // Adicionando os elementos
    document.querySelector('main').appendChild(div)
    div.appendChild(titulo)
    div.appendChild(p1)
    div.appendChild(input1)
    div.appendChild(p2)
    div.appendChild(input2)
    div.appendChild(span1)
    div.appendChild(input3)
    div.appendChild(p3)
    div.appendChild(input4)
    div.appendChild(p4)
    div.appendChild(input5)
    div.appendChild(span2)
    div.appendChild(input6)
    div.appendChild(p5)
    div.appendChild(input7)
    div.appendChild(p6)
    div.appendChild(input8)
    div.appendChild(span3)
    div.appendChild(input9)
    div.appendChild(media)
    div.appendChild(situacao)

    // Adicionando as classes
    div.classList.add('caixa_disciplina')
    titulo.classList.add('titulo_disciplina')
    p1.classList.add('tarefa')
    p2.classList.add('label_dificuldade')
    p3.classList.add('tarefa')
    p4.classList.add('label_dificuldade')
    p5.classList.add('tarefa')
    p6.classList.add('label_dificuldade')
    input1.classList.add('prazo')
    input2.classList.add('dificuldade')
    input3.classList.add('nota')
    input4.classList.add('prazo')
    input5.classList.add('dificuldade')
    input6.classList.add('nota')
    input7.classList.add('prazo')
    input8.classList.add('dificuldade')
    input9.classList.add('nota')
    span1.classList.add('label_nota')
    span2.classList.add('label_nota')
    span3.classList.add('label_nota')
    media.classList.add('media')
    situacao.classList.add('situacao')

    // Adicionando os atributos
    input1.setAttribute('type', 'date')
    input2.setAttribute('type', 'text')
    input3.setAttribute('type', 'number')
    input4.setAttribute('type', 'date')
    input5.setAttribute('type', 'text')
    input6.setAttribute('type', 'number')
    input7.setAttribute('type', 'date')
    input8.setAttribute('type', 'text')
    input9.setAttribute('type', 'number')

    // Adicionando os textos
    titulo.innerHTML = dadosDisciplina.nome
    p1.innerHTML = 'Fórum Temático Avaliativo (FTA)'
    p2.innerHTML = 'Dificuldade'
    span1.innerHTML = 'Nota:'
    p3.innerHTML = 'Atividade Individual Avaliativa (A1)'
    p4.innerHTML = 'Dificuldade'
    span2.innerHTML = 'Nota:'
    p5.innerHTML = 'Atividade Individual Avaliativa (A2)'
    p6.innerHTML = 'Dificuldade'
    span3.innerHTML = 'Nota:'
    media.innerHTML = 'Média Final:'
    situacao.innerHTML = 'CURSANDO'

    // Criando um id que se autoincremente
    const n = numero_de_caixas += 1
    let id_cx = 'cx' + n
    let id_fta = 'fta' + n
    let id_a1 = 'a1' + n
    let id_a2 = 'a2' + n
    div.setAttribute('id', id_cx)
    p1.setAttribute('id', id_fta)
    p3.setAttribute('id', id_a1)
    p5.setAttribute('id', id_a2)
    input3.setAttribute('id', `nota_${id_fta}`)
    input6.setAttribute('id', `nota_${id_a1}`)
    input9.setAttribute('id', `nota_${id_a2}`)
    media.setAttribute('id', `media${n}`)
    situacao.setAttribute('id', `situacao${n}`)

    // Adicionando os inputs de dificuldade numa lista
    // para que possa ser adicionado um escutador
    // de eventos em cada um deles
    input_dificuldades.push(input2, input5, input8)
    input_dificuldades.forEach((input) =>
        input.addEventListener('change', mudarDificuldade)
    )

    // Adicionando os inputs de notas numa lista
    // para que possa ser adicionado um escutador
    // de eventos em cada um deles
    notas.inputs.push([input3, input6, input9])
    notas.inputs[n].forEach((input) =>
        input.addEventListener('change', somarNotas)
    )
    notas.valores.push(
        {
            nota_fta: Number.parseFloat(0),
            nota_a1: Number.parseFloat(0),
            nota_a2: Number.parseFloat(0),
        }
    )
    notas.notasFinal.push(Number.parseFloat(0))
    
    // Adicionando um escutador de eventos
    // para mostrar as opçoes de status
    div.addEventListener('click', (e) => mostrarStatusOpcoes(e))
}

let elementoClicado = undefined
function mostrarStatusOpcoes(e) {

    if (e.target.classList.value === 'tarefa') {
        caixa_statusOpcoes.style.display = 'block'
        caixa_statusOpcoes.style.left = `${e.pageX + 30}px`
        caixa_statusOpcoes.style.top = `${e.pageY - 30}px`
        elementoClicado = e.target
        caixa_statusOpcoes.addEventListener('click', (e) => definirCorStatus(e, elementoClicado))
    }
}

function definirCorStatus(e, elem) {
    
    if (e.target.innerHTML === 'A fazer') {
        const color = '#ff4444'     // vermelho
        mudarStatus(elem, color)
    }
    
    else if (e.target.innerHTML === 'Fazendo') {
        const color = '#fdfd90'     // amarelo
        mudarStatus(elem, color)
    }
    
    else if (e.target.innerHTML === 'Quase feito') {
        const color = '#99f899'     // verde
        mudarStatus(elem, color)
    }
    
    else if (e.target.innerHTML === 'Feito') {
        const color = '#afafaf'     // cinza
        mudarStatus(elem, color)
    }
    
    else if (e.target.tagName === 'SPAN') {
        caixa_statusOpcoes.style.display = 'none'
    }

    caixa_statusOpcoes.style.display = 'none'
    e.stopImmediatePropagation()
}

function mudarStatus(elem, cor) {

    const id = elem.id
    const aFazerElem = barraStatus.children[0]
    const fazendoElem = barraStatus.children[1]
    const quaseFeitoElem = barraStatus.children[2]
    const feitoElem = barraStatus.children[3]

    if (cor === '#ff4444') {

        if (statusDados.aFazer.includes(id)) {
            const index = statusDados.aFazer.indexOf(id)
            statusDados.aFazer.splice(index, 1)
            aFazerElem.innerHTML = `A FAZER (${statusDados.aFazer.length})`
        }
        
        else if (statusDados.fazendo.includes(id)) {
            const index = statusDados.fazendo.indexOf(id)
            statusDados.fazendo.splice(index, 1)
            fazendoElem.innerHTML = `FAZENDO (${statusDados.fazendo.length})`
        }
        
        else if (statusDados.quaseFeito.includes(id)) {
            const index = statusDados.quaseFeito.indexOf(id)
            statusDados.quaseFeito.splice(index, 1)
            quaseFeitoElem.innerHTML = `QUASE FEITO (${statusDados.quaseFeito.length})`
        }
        
        else if (statusDados.feito.includes(id)) {
            const index = statusDados.feito.indexOf(id)
            statusDados.feito.splice(index, 1)
            feitoElem.innerHTML = `FEITO (${statusDados.feito.length})`
        }

        statusDados.aFazer.push(id)
        elem.style.color = cor
        elem.style.textDecoration = 'none'
        aFazerElem.innerHTML = `A FAZER (${statusDados.aFazer.length})`

    }
    
    else if (cor === '#fdfd90') {

        if (statusDados.aFazer.includes(id)) {
            const index = statusDados.aFazer.indexOf(id)
            statusDados.aFazer.splice(index, 1)
            aFazerElem.innerHTML = `A FAZER (${statusDados.aFazer.length})`
        }
        
        else if (statusDados.fazendo.includes(id)) {
            const index = statusDados.fazendo.indexOf(id)
            statusDados.fazendo.splice(index, 1)
            fazendoElem.innerHTML = `FAZENDO (${statusDados.fazendo.length})`
        }
        
        else if (statusDados.quaseFeito.includes(id)) {
            const index = statusDados.quaseFeito.indexOf(id)
            statusDados.quaseFeito.splice(index, 1)
            quaseFeitoElem.innerHTML = `QUASE FEITO (${statusDados.quaseFeito.length})`
        }
        
        else if (statusDados.feito.includes(id)) {
            const index = statusDados.feito.indexOf(id)
            statusDados.feito.splice(index, 1)
            feitoElem.innerHTML = `FEITO (${statusDados.feito.length})`
        }

        statusDados.fazendo.push(id)
        elem.style.color = cor
        elem.style.textDecoration = 'none'
        fazendoElem.innerHTML = `FAZENDO (${statusDados.fazendo.length})`

    }
    
    else if (cor === '#99f899') {

        if (statusDados.aFazer.includes(id)) {
            const index = statusDados.aFazer.indexOf(id)
            statusDados.aFazer.splice(index, 1)
            aFazerElem.innerHTML = `A FAZER (${statusDados.aFazer.length})`
        }
        
        else if (statusDados.fazendo.includes(id)) {
            const index = statusDados.fazendo.indexOf(id)
            statusDados.fazendo.splice(index, 1)
            fazendoElem.innerHTML = `FAZENDO (${statusDados.fazendo.length})`
        }
        
        else if (statusDados.quaseFeito.includes(id)) {
            const index = statusDados.quaseFeito.indexOf(id)
            statusDados.quaseFeito.splice(index, 1)
            quaseFeitoElem.innerHTML = `QUASE FEITO (${statusDados.quaseFeito.length})`
        }
        
        else if (statusDados.feito.includes(id)) {
            const index = statusDados.feito.indexOf(id)
            statusDados.feito.splice(index, 1)
            feitoElem.innerHTML = `FEITO (${statusDados.feito.length})`
        }

        statusDados.quaseFeito.push(id)
        elem.style.color = cor
        elem.style.textDecoration = 'none'
        quaseFeitoElem.innerHTML = `QUASE FEITO (${statusDados.quaseFeito.length})`

    } else if (cor === '#afafaf') {

        if (statusDados.aFazer.includes(id)) {
            const index = statusDados.aFazer.indexOf(id)
            statusDados.aFazer.splice(index, 1)
            aFazerElem.innerHTML = `A FAZER (${statusDados.aFazer.length})`
        }
        
        else if (statusDados.fazendo.includes(id)) {
            const index = statusDados.fazendo.indexOf(id)
            statusDados.fazendo.splice(index, 1)
            fazendoElem.innerHTML = `FAZENDO (${statusDados.fazendo.length})`
        }
        
        else if (statusDados.quaseFeito.includes(id)) {
            const index = statusDados.quaseFeito.indexOf(id)
            statusDados.quaseFeito.splice(index, 1)
            quaseFeitoElem.innerHTML = `QUASE FEITO (${statusDados.quaseFeito.length})`
        }
        
        else if (statusDados.feito.includes(id)) {
            const index = statusDados.feito.indexOf(id)
            statusDados.feito.splice(index, 1)
            feitoElem.innerHTML = `FEITO (${statusDados.feito.length})`
        }

        statusDados.feito.push(id)
        elem.style.color = cor
        elem.style.textDecoration = 'line-through'
        feitoElem.innerHTML = `FEITO (${statusDados.feito.length})`
    }
}

function mudarDificuldade({ target }) {
    
    if (target.value.toLowerCase() === 'baixa')
        target.style.color = '#99f899'
    
    else if (target.value.toLowerCase() === 'média')
        target.style.color = '#6262fa'
    
    else if (target.value.toLowerCase() === 'alta')
        target.style.color = '#ff4444'
}

function somarNotas({ target }) {

    const i = target.id.slice(-1)
    const elementoMediaFinal = document.querySelector(`#media${i}`)

    if (target.id.includes('fta'))
        notas.valores[i].nota_fta = Number.parseFloat(target.value)
    
    else if (target.id.includes('a1'))
        notas.valores[i].nota_a1 = Number.parseFloat(target.value)

    else if (target.id.includes('a2'))
        notas.valores[i].nota_a2 = Number.parseFloat(target.value)

    notas.notasFinal[i] = (notas.valores[i].nota_fta + notas.valores[i].nota_a1 + notas.valores[i].nota_a2) / 3
    elementoMediaFinal.innerHTML = `Média Final: <span id="n${i}">${notas.notasFinal[i].toFixed(1)}</span>`

    const corFinal = notas.notasFinal[i] >= 6 ? '#99f899' : '#ff4444'
    const spanNota = document.querySelector(`#n${i}`)
    spanNota.style.color = corFinal

    if (notas.inputs[i][0].value !== '' &&
        notas.inputs[i][1].value !== '' &&
        notas.inputs[i][2].value !== '') {
            const elementoSituacao = document.querySelector(`#situacao${i}`)
            elementoSituacao.style.color = corFinal
            elementoSituacao.innerHTML = notas.notasFinal[i] >= 6 ? 'APROVADO' : 'REPROVADO'
    }
}