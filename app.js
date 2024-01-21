let numeroSecreto =0;
let intento = 0;
let listaNumeroSorteados = [];
let numeroMaximo= 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroSecreto === numeroUsuario) {
        asignarTextoElemento('p',`Acertaste el número en ${intento} ${intento == 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        if(numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto el menor');
        }
        else{
            asignarTextoElemento('p','El número secreto el mayor');
        }
        intento++;
        limpiarCaja();
    }
    return;
}

let limpiarCaja = () => document.querySelector('#valorUsuario').value = '';

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    //Si ya sorteamos todos los numeros
    if(listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else {
        //Si el numero generado esta en la lista
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else{
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

    
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto =generarNumeroSecreto();
    intento = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled',true)
}

condicionesIniciales();