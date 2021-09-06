
var obj = {
  key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
    // your code here
  var arr = [];
  for (var prop in obj[key]) {
      if (obj[key][prop] % 2 === 0) {
       arr.push(obj[key][prop]);
      }
  }
  return arr;
}

var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]