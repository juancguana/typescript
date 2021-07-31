function sumar(a: number, b: number): number {
  return a + b;
}

function saludar(nombre: string): string {
  return 'I am ' + nombre;
}

function salvarMundo(): void {
  console.log('EL mundo esta salvado!');
}

let miFuncion: () => void;

miFuncion = 10;

miFuncion = sumar;
console.log(sumar(5, 5));

miFuncion = saludar;
console.log(miFuncion('Batman'));

miFuncion = salvarMundo;
