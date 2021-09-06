var obj = {
  key: [1, 2, 3, 4, 5]
};

function getOddElementsAtProperty(obj, key) {
  var oddArray = [];
  for (var prop in obj[key]) {
      if (obj[key][prop] % 2 === 1) {
       oddArray.push(obj[key][prop]);
      }
  }
  return oddArray;
}

var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]