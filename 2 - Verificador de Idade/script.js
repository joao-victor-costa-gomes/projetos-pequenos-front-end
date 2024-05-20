function verificar_ano() {
    const ano = new Date()
    const ano_atual = ano.getFullYear()
    let ano_in = document.getElementById("input_ano")
    let res = document.querySelector("div.resposta")

    if (ano_in.value == 0 || ano_in.value > ano_atual || ano_in.value < 0) {
        window.alert("Insira os dados de maneira correta.")

    } else {
        let sexo_i = document.getElementsByName("sex")
        let idade = ano_atual - Number(ano_in.value)
        let image = document.createElement("img")
        image.setAttribute("id", "foto")
        genero = ''
        if (sexo_i[0].checked){
            genero = "Homem"
            if (idade >= 0 && idade < 12) {
                image.setAttribute("src", "static/baby-male.jpg")
            } else if (idade < 21) {
                image.setAttribute("src", "static/young-male.jpg")
            } else if (idade < 50) {
                image.setAttribute("src", "static/adult-male.jpg")
            } else {
                image.setAttribute("src", "static/elder-male.jpg")
            }
    
        } else if (sexo_i[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 12) {
                image.setAttribute("src", "static/baby-female.jpg")
            } else if (idade < 21) {
                image.setAttribute("src", "static/young-female.jpg")
            } else if (idade < 50) {
                image.setAttribute("src", "static/adult-female.jpg")
            } else {
                image.setAttribute("src", "static/elder-female.jpg")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `${genero} com ${idade} anos.`
        image.style.paddingTop = "15px"
        res.appendChild(image)
        
    }
    
}