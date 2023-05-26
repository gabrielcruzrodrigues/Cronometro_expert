// textos
const title = document.getElementById("title_header");
const hora = document.getElementById('hora');
const minuto = document.getElementById('minuto');

// Botões
const btnIniciar = document.getElementById('Iniciar');
const btnPausar = document.getElementById('Pausar');
const btnReiniciar = document.getElementById('Reiniciar');

// eventos
btnIniciar.addEventListener('click', iniciarFunc);
// btnPausar.addEventListener('click', pausarFunc);
btnReiniciar.addEventListener('click', reiniciarFunc);

//variaveis importantes
let min30 = -1;
let intervalId;
let ponto = -1;

// funções
function iniciarFunc() {
    title.innerHTML = 'A contagem começou⏳';
    iniciarCronometro();
};


function iniciarCronometro() {
    
    /* armazena 30 minutos e ativa a função alterarRelogio, depois reseta e começa
    a contar do zero */
    function atualizarHoras() {
        let dataAtual = new Date();
        let horas = dataAtual.getHours();
        let minutos = dataAtual.getMinutes();
        let segundos = dataAtual.getSeconds();

        min30 += 1;

        if (min30 == 5) {
            alteraRelogio();
            min30 = 0;
        }
    
        console.log(min30);
        console.log(horas, minutos, segundos);
    }

    atualizarHoras();

    //atualiza a função atualizarHoras a cada 1 minuto
    intervalId = setInterval(atualizarHoras, 1000 * 60);
};


//chama a função alteração
function alteraRelogio() {

    /*recebe o a variavel ponto em um confunto de condicionais para verificar
    e assim determinar a hora atual do relogio */
    function alteracao() {
        ponto += 1;

        console.log(`ponto: ${ponto}`);
       
        if (ponto == 0) {    // 05:00
            hora.innerHTML = '05';
            minuto.innerHTML = '00';

        } else if (ponto == 1) { //04:30
            hora.innerHTML = '04';
            minuto.innerHTML = '30';

        } else if (ponto == 2) { // 04:00
            hora.innerHTML = '04';
            minuto.innerHTML = '00';

        } else if (ponto == 3) { //03:30
            hora.innerHTML = '03';
            minuto.innerHTML = '30';

        } else if (ponto == 4) { //03:00
            hora.innerHTML = '03';
            minuto.innerHTML = '00';

        } else if (ponto == 5) { //02:30
            hora.innerHTML = '02';
            minuto.innerHTML = '30';

        } else if (ponto == 6) { //02:00
            hora.innerHTML = '02';
            minuto.innerHTML = '00';

        } else if (ponto == 7) { //01:30
            hora.innerHTML = '01';
            minuto.innerHTML = '30';

        } else if (ponto == 8) { //01:00
            hora.innerHTML = '01';
            minuto.innerHTML = '00';

        } else if (ponto == 9) { //00:30
            hora.innerHTML = '00';
            minuto.innerHTML = '30';

        } else if (ponto == 10) { //00:00
            hora.innerHTML = '00';
            minuto.innerHTML = '00';
            reiniciarFunc();
        };
    }
    alteracao();
};


// //pausa o sistema temporariamente
// function pausarFunc() {
//     title.innerHTML = 'A contagem foi pausada🧊';

//     let min30Pausado = min30;
//     let intervalIdPausado = intervalId;
//     let pontoPausado = ponto;
// };

//reinicia todo o sistema
function reiniciarFunc() {
    setTimeout(function() {
        clearInterval(intervalId);
        console.log('intervalo parado');
    });

    title.innerHTML = 'Aperte Iniciar para começar';
    hora.innerHTML = '05';
    minuto.innerHTML = '30';
    ponto = -1;
    min30 = -1;

    console.log(ponto)
    console.log(min30)
};

