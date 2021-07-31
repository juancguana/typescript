/*! Este comentario se queda*/
var heroa = 'Ricardo Tapia (Robin)';
var edad = 12;
var msj = imprimir(heroa, edad);
console.log(msj);
function imprimir(heroe, edad) {
    heroe = heroa.toLowerCase();
    edad = edad + 10;
    return heroa + ' ' + edad;
}
console.log(heroa);
