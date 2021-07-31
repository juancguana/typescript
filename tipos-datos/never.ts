function error(mensaje: string): never {
  throw new Error(mensaje);
}

error("Error critico");