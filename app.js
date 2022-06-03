//Programa que pida dos numeros y nos diga cual es mayor y cual es menor y si son iguales.

//Variable global
const formulario = document.querySelector('form');
const contenedor = document.querySelector('#contenedor');


//Funciones utiles
const appendEtiqueta = (padre, hijo) => padre.appendChild(hijo);


formulario.addEventListener('submit', e => {
    e.preventDefault();
    numeroMayorMenor();
})

const numeroMayorMenor = () => {
    let input = document.querySelector('#input').value;
    let input2 = document.querySelector('#input2').value;

    if(input > input2) {
            mostrarMensaje(input)
        }else if(input === input2) {
            mostrarMensaje('ninguno, ambos son iguales')
        } else {
            mostrarMensaje(input2)
        }
}

const mostrarMensaje = mensaje => {
    parrafo = document.createElement('p');
    parrafo.textContent = `El numero más alto es: ${mensaje}.`;
    appendEtiqueta(contenedor, parrafo);
    setTimeout(() => {
        parrafo.remove();
    }, 4000);
}