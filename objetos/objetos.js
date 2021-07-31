"use strict";
var flash = {
    nombre: 'Barry Alen',
    edad: 24,
    poderes: ['Correr rapido', 'Viajar en el tiempo'],
    getNombre: function () {
        return this.nombre;
    },
};
var supermen = {
    nombre: 'Clark Kent',
    edad: 500,
    poderes: ['Super velocidad', 'Puede volar'],
    getNombre: function () {
        return this.nombre;
    },
};
var loquesea;
loquesea = {
    nombre: 'Fernando Alen',
    edad: 24,
    poderes: ['Correr rapido', 'Viajar en el tiempo'],
    getNombre: function () {
        return 'this.nombre';
    },
};
var cosa = function () {
    return null;
};
console.log(typeof cosa);
if (typeof cosa === 'string') {
    console.log('cosa es un numero');
}
else {
    console.log('No es un string');
}
