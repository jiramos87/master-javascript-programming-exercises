# `134` convertScoreToGradeWithPlusAndMinus

## 馃摑 Instrucciones

Escribe una funci贸n llamada "convertScoreToGradeWithPlusAndMinus".

Dada una puntuaci贸n, "convertScoreToGradeWithPlusAndMinus" returna un string que representa la calificaci贸n de letra correspondiente a la puntuaci贸n dada.

Notas:
* (100 - 90) --> 'A'
* (89  - 80) --> 'B'
* (79  - 70) --> 'C'
* (69  - 60) --> 'D'
* (59  -  0) --> 'F'
* Si la puntuaci贸n dada es mayor que 100 o menor que 0, deber铆a devolver 'PUNTUACI脫N NO V脕LIDA'.
* Si el puntaje est谩 entre 0 y 2 (incluido) de un rango dado, devuelva la letra con un '-'
* Si el puntaje est谩 entre 8 y 9 (incluido) de un rango dado, devuelva la letra con un '+'
* No hay F + y no hay F-.

```js
var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'

```