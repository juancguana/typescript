type Heroe = {
  nombre: string;
  edad: number;
  poderes: string[];
  getNombre: () => string;
};

let flash: Heroe = {
  nombre: 'Barry Alen',
  edad: 24,
  poderes: ['Correr rapido', 'Viajar en el tiempo'],
  getNombre() {
    return this.nombre;
  },
};

let supermen: Heroe = {
  nombre: 'Clark Kent',
  edad: 500,
  poderes: ['Super velocidad', 'Puede volar'],
  getNombre() {
    return this.nombre;
  },
};

let loquesea: string | number | Heroe;

loquesea = {
  nombre: 'Fernando Alen',
  edad: 24,
  poderes: ['Correr rapido', 'Viajar en el tiempo'],
  getNombre() {
    return 'this.nombre';
  },
};

let cosa: any = function(){
  return null
};

console.log(typeof cosa);

if (typeof cosa === 'string') {
  console.log('cosa es un numero');
} else {
  console.log('No es un string');
  
}
