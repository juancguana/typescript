/**
 * Este es un comentario
 * multilinea
 */

/*! Este comentario se queda*/
// Hero es el personaje principal
let heroa: string = 'Ricardo Tapia (Robin)';

// Variable edad del heroe
let edad: number = 12

let msj =  imprimir(heroa, edad);

console.log(msj);

//
// ====================
// Imprime al heroe
// ====================

function imprimir(heroe: string, edad: number):string {
  heroe = heroa.toLowerCase();
  edad = edad + 10;
  return heroa + ' ' + edad
}

console.log(heroa);
