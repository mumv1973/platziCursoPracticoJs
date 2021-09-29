/*Los requisitos para que sea un triangulo Isosceles son: Szolo 2 lados pueden y deben ser iguales. Y obviamente diferentes a la base. 
*/ 

function calcAlturaIsosceles(lado1, lado2, base){  // Partimos de la premisa que ambos lados son iguales, pero el ejercicio nos dice 3 lados. 
  if (lado1 !== lado2) { // primero verificamos si los lados son iguales. 
    console.log ("NO es un triángulo Isosceles"); // si no son iguales mostramos "No es un triangulo Isosceles"
  } else if ( lado1 !== base && lado2 !== base ){
    console.log("Es un triangulo Isosceles");
    const altura = Math.sqrt ((lado1 ** 2) - ((base ** 2) / 4));
    console.log(altura);
  }
}
// pruebas de validacion calculo
calcAlturaIsosceles(3, 8, 1); 
calcAlturaIsosceles(60, 20, 100);
calcAlturaIsosceles(12, 12, 10);
calcAlturaIsosceles(12, 11, 2);
calcAlturaIsosceles(10, 10, 15);

