/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Ciclos "for" anidados.
*/

var miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// Por cada arreglo anidado
for (var i = 0; i < miArreglo.length; i++) {
  var arregloAnidado = miArreglo[i];
  // Por cada elemento del arreglo anidado
  for (var j = 0; j < arregloAnidado.length; j++) {
    console.log(arregloAnidado[j]);
  }
}
