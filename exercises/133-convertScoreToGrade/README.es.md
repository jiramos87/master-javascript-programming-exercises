# `133` convertScoreToGrade

## 馃摑 Instrucciones

Escribe una funci贸n llamada "convertScoreToGrade".

Dada una puntuaci贸n, "convertScoreToGrade" returna un string que representa la calificaci贸n de letra correspondiente a la puntuaci贸n dada.

Notas:
* (100 - 90) --> 'A
'* (89  - 80) --> 'B'
* (79  - 70) --> 'C'
* (69  - 60) --> 'D'
* (59  -  0) --> 'F'
* Si la puntuaci贸n dada es mayor que 100 o menor que 0, deber铆a devolver 'INVALID SCORE'.

```Js
var output = convertScoreToGrade(91);
console.log(output); // --> 'A'
```