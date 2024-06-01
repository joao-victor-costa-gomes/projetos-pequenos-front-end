function gerar_passos(){

    let inicio = parseInt(document.getElementById("inicio").value) 
    let fim = parseInt(document.getElementById("fim").value)
    let passos = parseInt(document.getElementById("passos").value)

    let resposta = document.getElementById("resultado")
    resposta.innerHTML = ""

    let bandeirinha = document.createElement("p")
    bandeirinha.innerHTML = "&#x1F6A9"

    if (isNaN(inicio) || isNaN(fim)){
        alert('Os campos "início" e "fim" devem estar preenchidos')
    } else if (passos <= 0 || isNaN(passos)) {
        alert("Como nenhum valor válido foi informado, assumimos que fosse 1")
        passos = 1
    }

    if (inicio < fim) {
        for (let i=inicio; i<=fim; i+=passos){
            let valor = document.createElement("p")
            valor.innerHTML = `${i} &#x1F449;`
            resposta.appendChild(valor)
            resposta.appendChild(bandeirinha)
        }

    } else if (inicio == fim) {
        alert("O valor de início não pode ser igual ao valor do fim")

    } else if (inicio > fim) {
        for (let i=inicio; i>=fim; i-=passos){
            let valor = document.createElement("p")
            valor.innerHTML = `${i} &#x1F449;`
            resposta.appendChild(valor)
        }
        resposta.appendChild(bandeirinha)
        
    } 

}