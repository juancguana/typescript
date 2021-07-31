"use strict";
var isSuperman = true;
var isBatman;
var isAquaman = true;
if (isSuperman) {
    console.log('Estamos a salvo');
}
else {
    console.log('Oh no!!');
}
isSuperman = convertClark();
if (isSuperman) {
    console.log('Estamos a salvo');
}
else {
    console.log('Oh no!!');
}
function convertClark() {
    return false;
}
