function squareElements(arr) {
  // your code here
  let arrSquare = [];
  for(var i = 0; i < arr.length; i++) {
    arrSquare[i] = arr[i] ** 2;
  }
  return arrSquare;
}

var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]