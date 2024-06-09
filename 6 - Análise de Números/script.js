let valores = []

function adicionarValor() {
    let valor = parseInt(document.getElementById('box-input').value)

    if (valor < 1 || valor > 100) {
        alert("O valor informado deve estar entre 1 e 100.")

    } else if (isNaN(valor)) {
        alert("O valor informado não é válido.")

    } else if (valores.includes(valor)) {
        alert("O valor já se encontra na lista.")

    } else {
        valores.push(valor)
        let lista = document.getElementById('lista-numeros')
        let option = document.createElement('option')
        option.text = `Valor ${valor} foi adicionado.`
        lista.add(option)
        document.getElementById('box-input').value = ' '
    }
}

function analisarValores() {
    let resposta = document.getElementById('resposta')
    resposta.innerHTML = ''

    if (valores.length == 0){
        alert("Não tem nenhum elemento na lista.")

    } else {
        let n_valores = valores.length
        let maior_valor = Math.max(...valores)
        let menor_valor = Math.min(...valores)

        let soma_valores = 0
        for (let index in valores){
            soma_valores += valores[index]
        }
        let media = (soma_valores/n_valores).toFixed(2)

        resposta.innerHTML = `<p>Ao todo, temos <strong>${n_valores}</strong> valores informados </p>`
        resposta.innerHTML += `<p>O maior valor informado foi: <strong>${maior_valor}</strong></p>`
        resposta.innerHTML += `<p>O menor valor informado foi: <strong>${menor_valor}</strong>`
        resposta.innerHTML += `<p>A soma dos valores é: <strong>${soma_valores}</strong></p>`
        resposta.innerHTML += `<p>A média dos valores é: <strong>${media}</strong></p>`
    }

}