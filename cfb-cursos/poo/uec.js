class Lutador {
    // Atributos
    #nome
    #nacionalidade
    #idade
    #altura
    #peso
    #categoria
    #vitorias
    #derrotas
    #empates
    // Método Construtor
    constructor(no, na, id, al, pe, vi, de, em) {
        this.#nome = no
        this.#nacionalidade = na
        this.#idade = id
        this.#altura = al
        this.setPeso(pe)
        this.#vitorias = vi
        this.#derrotas = de
        this.#empates = em
    }
    // Métodos
    apresentar() {
        console.log('-------------------------------------')
        console.log('Representando a sua bandeira ' + this.getNacionalidade())
        console.log('Ele tem ' + this.getIdade() + ' anos de idade')
        console.log('Medindo ' + this.getAltura() + ' m de altura')
        console.log('E pesando ' + this.getPeso() + ' kg')
        console.log('Ele já ganhou ' + this.getVitorias() + ' lutas')
        console.log('Perdeu ' + this.getDerrotas())
        console.log('E empatou ' + this.getEmpates())
        console.log('Façam muito barulho para... ' + this.getNome() + '!')
    }
    status() {
        console.log('-------------------------------------')
        console.log(this.getNome() + ' é um peso ' + this.getCategoria())
        console.log('Já ganhou ' + this.getVitorias() + ' vezes')
        console.log('Perdeu ' + this.getDerrotas())
        console.log('E empatou ' + this.getEmpates())
    }
    ganharLuta() {
        this.setVitorias(this.getVitorias() + 1)           
    }
    perderLuta() {
        this.setDerrotas(this.getDerrotas() + 1)
    }
    empatarLuta() {
        this.setEmpates(this.getEmpates() + 1)
    }
    // Métodos Especiais
    setVitorias(vi) {
        this.#vitorias = vi
    }
    getVitorias() {
        return this.#vitorias
    }
    setDerrotas(de) {
        this.#derrotas = de
    }
    getDerrotas() {
        return this.#derrotas
    }
    setEmpates(em) {
        this.#empates = em
    }
    getEmpates() {
        return this.#empates
    }
    getNome() {
        return this.#nome
    }
    setNome(no) {
        this.#nome = no
    }
    getNacionalidade() {
        return this.#nacionalidade
    }
    setNacionalidade(na) {
        this.#nacionalidade = na
    }
    getIdade() {
        return this.#idade
    }
    setIdade(id) {
        this.#idade = id
    }
    getAltura() {
        return this.#altura
    }
    setAltura(al) {
        this.#altura = al
    }
    getPeso() {
        return this.#peso           
    }
    setPeso(pe) {
        this.#peso = pe
        this.#setCategoria()
    }
    getCategoria() {
        return this.#categoria
    }
    #setCategoria() {
        if (this.#peso < 52.2) {
            this.#categoria = 'Inválido'
        } else if (this.#peso <= 70.3) {
            this.#categoria = 'Leve'
        } else if (this.#peso <= 83.9) {
            this.#categoria = 'Médio'
        } else if (this.#peso <= 120.2) {
            this.#categoria = 'Pesado'
        } else {
            this.#categoria = 'Inválido'
        }
    }
}

class Luta {
    // Atributos
    #desafiado
    #desafiante
    #rounds
    #aprovada
    marcarLuta (l1, l2) {
        if (l1.getCategoria() === l2.getCategoria() && l1 != l2) {
            this.#aprovada = true
            this.#desafiado = l1
            this.#desafiante = l2
        } else {
            this.#aprovada = false
            this.#desafiado = null
            this.#desafiante = null
        }
    }
    lutar() {
        if (this.#aprovada) {
            this.#desafiado.apresentar()
            this.#desafiante.apresentar()
            var vencedor = Math.floor(Math.random() * 3)
            console.log('-------------------------------------')
            console.log('Chegou a hora!')
            switch (vencedor) {
                case 0: // Empate
                    console.log('Empatou!')
                    this.#desafiado.empatarLuta()
                    this.#desafiante.empatarLuta()
                    break
                case 1: // Ganhou desafiado
                    console.log(this.#desafiado.getNome() + ' Ganhou!')
                    this.#desafiado.ganharLuta()
                    this.#desafiante.perderLuta()
                    break
                case 2: // Ganhou desafiante
                    console.log(this.#desafiante.getNome() + ' Ganhou!')
                    this.#desafiante.ganharLuta()
                    this.#desafiado.perderLuta()
                    break
            }
        } else {
            console.log('Luta não pode acontecer')
        }
    }
    getDesafiado() {
        return this.#desafiado
    }
    setDesafiado(dd) {
        this.#desafiado = dd
    }
    getDesafiante() {
        return this.#desafiante
    }
    setDesafiante(dt) {
        this.#desafiante = dt
    }
    getRounds() {
        return this.#rounds
    }
    setRounds(rd) {
        this.#rounds = rd
    }
    getAprovada() {
        return this.#aprovada
    }
    setAprovada(ap) {
        this.#aprovada = ap
    }
}

// Programa Principal
let l = []
l[0] = new Lutador('Brigão', 'brasileira', 21, 1.88, 78, 10, 1, 0)
l[1] = new Lutador('Maluco', 'brasileira', 20, 1.79, 72, 11, 3, 1)

let UEC01 = new Luta()
UEC01.marcarLuta(l[0], l[1])
UEC01.lutar()

l[0].status()
l[1].status()