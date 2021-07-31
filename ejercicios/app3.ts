type Herramienta = {
  carroceria: string,
  modelo: string,
  antibalas: boolean,
  pasajeros: number,
  disparar?: () => void
}

// Objetos
let batimovil: Herramienta = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

let bumblebee: Herramienta = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};


type Villano = {
  nombre: string,
  // edad: number | undefined, modo estricto
  edad: number,
  mutante: boolean
}

// Villanos debe de ser un arreglo de objetos personalizados
let villans: Villano[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
type Charles = {
  poder: string,
  estatura: number
};

let charles: Charles = {
  poder:"psiquico",
  estatura: 1.78
};

type Apocalipsis = {
  lider: boolean,
  miembros: string[]
}

let apocalipsis: Apocalipsis = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: Apocalipsis | Charles;

mystique = charles;
mystique = apocalipsis;
