function gerar_tabuada() {
    let numero_tabuada = document.getElementById("numero-tabuada").value;
    let tabuada_resposta = document.getElementById("box-tabuada");

    tabuada_resposta.innerHTML = "";
    
    if (numero_tabuada == "") {
        alert("Insira algum valor na caixa de entrada")

    } else {
        for (let i = 1; i <= 10; i++) {
            let linha_tabuada = document.createElement("p");
            linha_tabuada.textContent = `${numero_tabuada} x ${i} = ${numero_tabuada * i}`;
            tabuada_resposta.appendChild(linha_tabuada);
        }
    }
}
