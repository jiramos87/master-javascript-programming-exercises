function fromListToObject(array) {
  // your code here
  var obj = {};
  for(var i in array) {
    obj[array[i][0]] = array[i][1]; 
  }
  return obj;

}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // => { make: 'Ford', model: 'Mustang', year: 1964 }