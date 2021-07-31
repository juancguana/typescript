"use strict";
function nombreCompleto2(nombre, apellido, capitalizado) {
    if (capitalizado === void 0) { capitalizado = true; }
    if (capitalizado) {
        return capitalizar(nombre) + ' ' + capitalizar(apellido);
    }
    else {
        return nombre + ' ' + apellido;
    }
}
function capitalizar(palabra) {
    return (palabra.charAt(0).toUpperCase() + palabra.substr(1).toLocaleLowerCase());
}
var nombre2 = nombreCompleto2('barry', 'alen');
console.log(nombre2);
