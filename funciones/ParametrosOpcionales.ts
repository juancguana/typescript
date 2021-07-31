function nombreCompleto1(nombre: string, apellido?: string): string {
  if (apellido) {
    return nombre + ' ' + apellido;
  } else {
    return nombre;
  }
}

let nombre1 = nombreCompleto1('Barry', 'Alen');

console.log(nombre1);
