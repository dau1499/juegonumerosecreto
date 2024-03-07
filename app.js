let numeroSecreto = 0; //hago que numeroSecreto sea igual al nombre de la variable que desarrollo abajo
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento); //esta linea retorna el titulo que tengo en el html
    //estoy asignando un OBJETO a la variable en este caso el titulo
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() { //capturamos lo que ingresa el usuario con nuestro getelementbid: valorUsuario
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log ('numero secreto:', numeroSecreto);
    console.log('numero de intentos:', intentos);
    if (numeroDeUsuario === numeroSecreto) {
            asignarTextoElemento ('p',`¡Acertaste el número! Lo lograste en ${intentos} ${ (intentos === 1) ? 'vez': 'veces'}`);
            document.getElementById ('reiniciar').removeAttribute('disabled');
            //busco el elemento con getElementById, luego remuevo el atributo disabled en este bloque e texto cuando el usuario acierta
        } else {
        //El usuario no acertó
        if (numeroDeUsuario> numeroSecreto){
            asignarTextoElemento ('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento ('p', 'El número secreto es mayor');
        }
        intentos ++;
        limpiarCaja (); //invocamos la funcion en el bloque cuando el num es incorrecto
    }
    return;
}

function limpiarCaja () {
    document.querySelector('#valorUsuario').value = ''; //query selector es un selector generico, le tenemos que decir el ID del input 
    //declaramos que el valor caja quede vacio, indicando con dos comillas
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random ()*numeroMaximo)+1;

    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);

    // si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento ('p', 'Ya se sortearon todos los numeros posibles');
    } else {
    // si el numero generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push (numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales (){ //condicionesIniciales le da valor a la variable generar numero
    asignarTextoElemento ('h1','Juego del número Secreto!');
    asignarTextoElemento ('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja ();
    //indicar mensaje de inicio intervalo de numeros
    //generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales ();
    //deshabilitar el boton de nuevo juego, porque el solo se habilita cuando gana un juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}                                                                                                              

//invoco la función para cada elemento HTML, y solo la declaro una vez arriba
condicionesIniciales();