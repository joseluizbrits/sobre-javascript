class Pessoa {
    // Atributos
    #nome
    #idade
    #sexo
    // Método Construtor
    constructor(nm, id, sx) {
        this.#nome = nm
        this.#idade = id
        this.#sexo = sx
    }
    // Método
    fazerAniversario() {
        this.getIdade()++
    }
    // Métodos Especiais
    getNome() {
        return this.#nome
    }
    setNome(nm) {
        this.#nome = nm
    }
    getIdade() {
        return this.#idade
    }
    setIdade(id) {
        this.#idade = id
    }
    getSexo() {
        return this.#sexo
    }
    setSexo(sx) {
        this.#sexo = sx
    }
}

class Livro {
    // Atributos
    #titulo
    #autor
    #totPaginas
    #pagAtual
    #aberto
    #leitor
    // Método Construtor
    constructor(tt, au, tot, le) {
        this.#titulo = tt
        this.#autor = au
        this.#aberto = false
        this.#pagAtual = 0
        this.#totPaginas = tot
        this.#leitor = le
    }
    // Métodos
    detalhes() {
        console.log('Livro: ' + this.#titulo + ', escrito por ' + this.#autor)
        console.log('Páginas: ' + this.#totPaginas + ', atual ' + this.#pagAtual)
        console.log('Está sendo lido por ' + this.#leitor.getNome())
    }
    // Método Interface
    abrir() {
        this.#aberto = true
    }
    fechar() {
        this.#aberto = false
    }
    folhear(p) {
        if (p > this.#totPaginas) {
            this.#pagAtual = 1
        } else {
            this.#pagAtual = p
        }
    }
    avancarPag() {
        if (this.#pagAtual < this.#totPaginas) {
            this.#pagAtual++
        } else {
            this.#pagAtual = 1
        }
    }
    voltarPag() {
        if (this.#pagAtual > 1) {
            this.#pagAtual--
        } else {
            this.#pagAtual = this.#totPaginas
        }
    }
    // Método Especiais
    getTitulo() {
        return this.#titulo
    }
    setTitulo(tt) {
        this.#titulo = tt
    }
    getAutor() {
        return this.#autor
    }
    setAutor(au) {
        this.#autor = au
}
    getTotPaginas() {
        return this.#totPaginas
    }
    setTotPaginas(tot) {
        this.#totPaginas = tot
    }
    getPaginaAtual() {
        return this.#pagAtual
    }
    setPaginaAtual(pag) {
        this.#pagAtual = pag
    }
    getAberto() {
        return this.#aberto
    }
    setAberto(ab) {
        this.#aberto = ab
    }
}

let p = []
let l = []

p[0] = new Pessoa('Pedrinho', 12, 'M')
p[1] = new Pessoa('Mariazinha', 10, 'F')

l[0] = new Livro('Turminha do Barulhinho', 'Caneta Rápida', 55, p[1])
l[1] = new Livro('Aprendendo a Correr', 'Super Corredor', 21, p[0])
l[3] = new Livro('Castelo Encantado', 'Poderozete', 104, p[1])

l[0].folhear(23)
l[0].detalhes()