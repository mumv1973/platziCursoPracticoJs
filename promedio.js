/* const lista1 = [
  100,
  200,
  300,
  500
];

let sumaLista1 = 0;
for (i = 0 ; i < lista1.length ; i++){
  sumaLista1 = sumaLista1 + lista1[i];
}

const promedioLista1 = sumaLista1 / lista1.length; 
*/ 



/* todo lo de arriba se reemplaza con */ 

function calcularMediaAritmetica(lista){
/*   let sumalista = 0;
   for ( let i = 0 ; i < lista.length ; i++){
   sumalista = sumalista + lista[i];
 } 
*/ 

// Otra forma de escribir la funcion de lina 21 a 24 es:

 const sumalista = lista.reduce(
   function (valorAcumulado = 0, nuevoElemento) {
     return valorAcumulado + nuevoElemento;
   }
 );

  const promedioLista = sumalista / lista.length;
  return promedioLista;
  }