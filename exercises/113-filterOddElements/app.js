function filterOddElements(arr) {
  // your code here
  let arrOdd = [];
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 1) {
      arrOdd.push(arr[i]);
    }
  }
  return arrOdd;
}

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]