const hora = document.getElementsByClassName("hora")[0];
const minuto = document.getElementsByClassName("minuto")[0];
const segundo = document.getElementsByClassName("segundo")[0];

const cor_dia = "linear-gradient(90deg, rgba(112,232,255,1) 0%, rgba(0,159,255,1) 49%, rgba(0,129,255,1) 100%)"
const cor_tarde = "linear-gradient(90deg, rgba(255,210,58,1) 0%, rgba(255,140,31,1) 46%, rgba(254,103,22,1) 100%)"
const cor_noite = "linear-gradient(90deg, rgba(1,81,133,1) 0%, rgba(2,39,88,1) 33%, rgba(0,15,44,1) 100%)"

function dia() {
    document.body.style.background = cor_dia;
    hora.style.color = "rgba(0,159,255,1)";
    minuto.style.color = "rgba(0,159,255,1)";
    segundo.style.color = "rgba(0,159,255,1)";
}

function tarde() {
    document.body.style.background = cor_tarde; 
    hora.style.color = "rgba(255,140,31,1)";
    minuto.style.color = "rgba(255,140,31,1)";
    segundo.style.color = "rgba(255,140,31,1)";
}

function noite() {
    document.body.style.background = cor_noite;
    hora.style.color = "rgba(2,39,88,1)";
    minuto.style.color = "rgba(2,39,88,1)";
    segundo.style.color = "rgba(2,39,88,1)";
}

function relogio(){
    let horario_atual = new Date();

    let hora_atual = horario_atual.getHours();;
    let minuto_atual = horario_atual.getMinutes();
    let segundo_atual = horario_atual.getSeconds();

    hora_atual = (hora_atual < 10) ? "0" + hora_atual : hora_atual;
    minuto_atual = (minuto_atual < 10) ? "0" + minuto_atual : minuto_atual;
    segundo_atual = (segundo_atual < 10) ? "0" + segundo_atual : segundo_atual;

    hora.textContent = hora_atual;
    minuto.textContent = minuto_atual;
    segundo.textContent = segundo_atual; 

    if (0 <= hora_atual && hora_atual < 12) {
        dia()
    }

    else if (12 <= hora_atual && hora_atual < 18) {
        tarde()
    }

    else {
        noite()
    }
    
}

const atualizar_relogio = setInterval(relogio, 1000);
