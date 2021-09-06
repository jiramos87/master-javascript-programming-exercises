var obj = {
  key: [2, 1, 5]
};


function getSquaredElementsAtProperty(obj, key) {
    // your code here
    let arr = [];
    if(Array.isArray(obj[key])){
      for(var i in obj[key]){
        var squared = obj[key][i] * obj[key][i];
        arr.push(squared);
      }
    }
  return arr;
}

var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
