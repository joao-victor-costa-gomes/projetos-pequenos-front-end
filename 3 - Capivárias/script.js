function submeter(){
    
    let numero = document.getElementById("numero-capivaras").value
    let resposta = document.getElementById("box-resposta")
    let i = 0
    
    resposta.innerHTML = "";
    resposta.style.textAlign = ""

    if (numero == 0) {
        resposta.style.textAlign = "center"
        resposta.innerHTML = "Você não gosta de capivaras? &#128148;"
    } else if (numero < 0) {
        resposta.style.textAlign = "center"
        resposta.innerHTML = "Número inválido."
    } else {
        for(i=0; i<numero; i++){
            let imagem = document.createElement("img")
            imagem.setAttribute("src", "capivara.gif")
            imagem.width = "100"
            imagem.height = "100"
            imagem.style.padding = "10px"
            resposta.appendChild(imagem)
        }
    }

}