function nombreCompleto2(
  nombre: string,
  apellido: string,
  capitalizado: boolean = true
): string {
  if (capitalizado) {
    return capitalizar(nombre) + ' ' + capitalizar(apellido);
  } else {
    return nombre + ' ' + apellido;
  }
}

function capitalizar(palabra: string): string {
  return (
    palabra.charAt(0).toUpperCase() + palabra.substr(1).toLocaleLowerCase()
  );
}

let nombre2 = nombreCompleto2('barry', 'alen');

console.log(nombre2);
