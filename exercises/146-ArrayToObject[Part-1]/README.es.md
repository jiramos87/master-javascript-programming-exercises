# `146` Array To Object[Part 1]

## 馃摑 Instrucciones

Escriba una funci贸n 'transformFirstAndLast' que tome un arreglo y devuelva un objeto con:

1) el primer elemento del arreglo como key del objeto, y
2) el 煤ltimo elemento del arreglo como el valor de esa key.

 Ejemplo de entrada:

 ```Js
['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']
```

Valor de retorno de la funci贸n (salida):

```Js
{
  Queen : 'Beyonce'
}
```

 No cambies el arreglo de entrada. Sup贸n que todos los elementos en el arreglo de entrada ser谩n del tipo 'string'.

Ten en cuenta que el arreglo de entrada puede tener un n煤mero variable de elementos. Tu c贸digo debe acomodar eso flexiblemente.

E.g. deber铆a manejar la entrada como:

```js
['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey']
```

Valor de retorno de la funci贸n (salida):

```Js
{
  Kevin : 'Spacey'
}
```