"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Tipos
var batman = "Bruce";
var superman = "Clark";
var existe = false;
// Tuplas
var parejaHeroes = [batman, superman];
var villano = ["Lex Lutor", 5, true];
// Arreglos
var aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
//Enumeraciones
var Fuerza;
(function (Fuerza) {
    Fuerza[Fuerza["acuaman"] = 0] = "acuaman";
    Fuerza[Fuerza["batman"] = 1] = "batman";
    Fuerza[Fuerza["flash"] = 5] = "flash";
    Fuerza[Fuerza["superman"] = 100] = "superman";
})(Fuerza || (Fuerza = {}));
var fuerzaAcuaman = Fuerza.acuaman;
var fuerzaBatman = Fuerza.batman;
var fuerzaFlash = Fuerza.flash;
var fuerzaSuperman = Fuerza.superman;
// Retorno de funciones
function actilet_batiseñal() {
    return "activada";
}
function pedir_ayuda() {
    console.log("Auxilio!!!");
}
// Aserciones de Tipo
var poder = "100";
var largoDelPoder = poder.length;
console.log(largoDelPoder);
var poder2 = 100;
var largoDelPoder2 = poder.length;
console.log(largoDelPoder);
