let numero_de_caixas = 0

let dadosDisciplina = {
    nome: '',
    fta: true,
    a1: false,
    a2: false
}

const statusDados = {
    aFazer: [],
    fazendo: [],
    quaseFeito: [],
    feito: []
}

const caixas = []
const input_dificuldades = []
const inputs = document.getElementsByClassName('input_inserir')
const barraStatus = document.querySelector('#status')
const caixa_inserir = document.querySelector('#caixa_inserir')
const div_fantasma = document.querySelector('#div--fantasma')
const btn_fechar = document.querySelector('#btn_fecharCaixa')
const btn_inserir = document.querySelector('#btn_inserir')
const btn_abrirCaixa = document.querySelector('#abrir_caixaInserir')
const filhosFantasmas = [...div_fantasma.children]
const statusOpcoes = filhosFantasmas.filter((e) => e.tagName !== 'SPAN')

btn_abrirCaixa.addEventListener('click', mostrar_caixaInserir)


// Escutador de evento para modificar a barra de status
// NÃO CONSIGO RESOLVER ESSA PORRA!!! CARALHO!!! MERDA!!!
// ESPERO QUE VOCÊ RESOLVA ESSE TROÇO ESTÚPIDO!!! VAI TOMAR NO CU!!!
function mudarStatus(elemento) {
    let cont = 0
    for (let opc of statusOpcoes) {
        if (opc.innerHTML === 'A fazer') {
            opc.addEventListener('click', (e) => {
                elemento.style.color = 'red'
                cont += 1
                console.log(cont)
                console.log(elemento)
                div_fantasma.style.display = 'none'
                e.stopImmediatePropagation()
            })
        } else if (opc.innerHTML === 'Fazendo') {
            opc.addEventListener('click', (e) => {
                elemento.style.color = 'gold'
                cont += 1
                console.log(cont)
                console.log(elemento)
                div_fantasma.style.display = 'none'
                e.stopImmediatePropagation()
            })
        } else if (opc.innerHTML === 'Quase feito') {
            opc.addEventListener('click', (e) => {
                elemento.style.color = 'green'
                cont += 1
                console.log(cont)
                console.log(elemento)
                div_fantasma.style.display = 'none'
                e.stopImmediatePropagation()
            })
        }  else if (opc.innerHTML === 'Feito') {
            opc.addEventListener('click', (e) => {
                elemento.style.color = 'gray'
                cont += 1
                console.log(cont)
                console.log(elemento)
                div_fantasma.style.display = 'none'
                e.stopImmediatePropagation()
            })
        }
    }
}

function criar_caixaDisciplina() {
    // Criando os elementos
    const div = document.createElement('div')
    const h2 =  document.createElement('h2')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')
    const p4 = document.createElement('p')
    const p5 = document.createElement('p')
    const p6 = document.createElement('p')
    const input1 = document.createElement('input')
    const input2 = document.createElement('input')
    const input3 = document.createElement('input')
    const btn = document.createElement('button')

    // Adicionando os elementos
    document.body.appendChild(div)
    div.appendChild(h2)
    div.appendChild(p1)
    div.appendChild(p2)
    div.appendChild(input1)
    div.appendChild(p3)
    div.appendChild(p4)
    div.appendChild(input2)
    div.appendChild(p5)
    div.appendChild(p6)
    div.appendChild(input3)
    div.appendChild(btn)

    // Adicionando as classes
    div.classList.add('caixa_disciplina')
    h2.classList.add('h2_disciplina')
    p1.classList.add('fta')
    p2.classList.add('dif1')
    p3.classList.add('a1')
    p4.classList.add('dif2')
    p5.classList.add('a2')
    p6.classList.add('dif3')
    input1.classList.add('input_dificuldade')
    input2.classList.add('input_dificuldade')
    input3.classList.add('input_dificuldade')

    // Adicionando os atributos
    input1.setAttribute('type', 'text')
    input1.setAttribute('value', '')
    input2.setAttribute('type', 'text')
    input2.setAttribute('value', '')
    input3.setAttribute('type', 'text')
    input3.setAttribute('value', '')
    btn.classList.add('btn_editar')

    // Adicionando os textos
    h2.innerHTML = dadosDisciplina.nome
    p1.innerHTML = 'Fórum Temático Avaliativo (FTA)'
    p2.innerHTML = 'Dificuldade'
    p3.innerHTML = 'Atividade Individual Avaliativa (A1)'
    p4.innerHTML = 'Dificuldade'
    p5.innerHTML = 'Atividade Individual Avaliativa (A2)'
    p6.innerHTML = 'Dificuldade'
    btn.innerHTML = 'Editar'

    // Adicionando os inputs de dificuldade numa lista
    // para que possa ser adicionado um escutador
    // de eventos em cada um deles
    input_dificuldades.push(input1, input2, input3)
    input_dificuldades.forEach((input) => {
        input.addEventListener('change', mudarDificuldade)
    })

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

    // Adicionando as caixas de tarefas em uma lista
    // para que se possa manipular a barra de status
    caixas.push(div)
    barraStatus.firstElementChild.innerHTML = `A FAZER (${n})`
    
    adicionarEventoParaDivFantasma()
}

function mostrar_caixaInserir() {
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
        } else {
            dadosDisciplina = {
                nome: inputs[0].value,
                fta: inputs[1].checked,
                a1: inputs[2].checked,
                a2: inputs[3].checked
            }
            criar_caixaDisciplina()
            inputs[0].value = ''
            inputs[1].checked = true
            inputs[2].checked = false
            inputs[3].checked = false
            caixa_inserir.style.display = 'none'
            e.stopImmediatePropagation()
        }
    })
}

function adicionarEventoParaDivFantasma() {
    const elementosFilhos = caixas.map((elemento) =>
        [...elemento.children]
    )
    elementosFilhos.forEach((e) =>
        e.filter((e) => {
            if (e.getAttribute('class') === 'a1' ||
                e.getAttribute('class') === 'a2' ||
                e.getAttribute('class') === 'fta')
                e.addEventListener('click', (e) => {
                    div_fantasma.style.display = 'block'
                    div_fantasma.style.left = `${e.pageX + 30}px`
                    div_fantasma.style.top = `${e.pageY - 30}px`

                    fecharDivFantasma()
                    mudarStatus(e.target)
                    e.stopImmediatePropagation()
                })
        })
    )
}

function fecharDivFantasma() {
    // Fechando a div--fantasma pelo botão x
    div_fantasma.children[0].addEventListener('click', () =>
        div_fantasma.style.display = 'none')

    // Fechando a div--fantasma clicando em qualquer lugar
    // inclusive nela e em suas opções
    if (div_fantasma.style.display = 'block') {
        document.addEventListener('click', () =>
        div_fantasma.style.display = 'none')
    }
}

function mudarDificuldade({ target }) {
    if (target.value.toLowerCase() === 'baixa')
        target.style.color = 'green'
    else if (target.value.toLowerCase() === 'média')
        target.style.color = 'blue'
    else if (target.value.toLowerCase() === 'alta')
        target.style.color = 'red'
}