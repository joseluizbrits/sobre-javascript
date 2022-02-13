function contar() {
    var txtInício = document.getElementById('caixaInício')
    var txtFim = document.getElementById('caixaFim')
    var txtPasso = document.getElementById('caixaPasso')
    var início = Number(txtInício.value)
    var fim = Number(txtFim.value)
    var passo = Number(txtPasso.value)
    var res = document.querySelector('div#res')
    if (início == 0 || fim == 0) {
        res.innerHTML = 'Impossível contar!'
    } else if (passo == 0) {
        window.alert('Passo inválido! Considerando PASSO 1')
        for (var c = início; c <= fim; c++) {
            res.innerHTML += `${c} > `
        }
        res.innerHTML += 'FIM!'
    } else {
        for (var c = início; c <= fim; c += passo) {
            res.innerHTML += `${c} \u{1F449} `
        }
        res.innerHTML += '\u{1F3C1}'
    }
}