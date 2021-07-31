function nombreCompleto3(nombre: string, ...losDemasParametros: string[]): string {
  return nombre + ' ' + losDemasParametros.join(' ');
}

let superman: string = nombreCompleto3('Clark', 'Joseph', 'Kent');
let ironman: string = nombreCompleto3('Anthony', 'Edward', 'Tony', 'Stark');

console.log(superman);
console.log(ironman);
