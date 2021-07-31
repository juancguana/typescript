"use strict";
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 1] = "min";
    Volumen[Volumen["medio"] = 5] = "medio";
    Volumen[Volumen["maximo"] = 10] = "maximo";
})(Volumen || (Volumen = {}));
var audio = Volumen.medio;
console.log(Volumen[5]);
