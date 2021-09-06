var obj = {
  key: [1, 2, 3]
};
function getAllButLastElementOfProperty(obj, key) {
    // your code here
    if (obj[key] === undefined) {
      return [];
    }
    for(prop in obj) {
      if(prop = key) {
        if(obj[prop] === [] || !Array.isArray(obj[prop]) || obj[prop].length < 1) {
          return [];
        } else {
          obj[prop].pop()
          return obj[prop];
        }
      } else {
        return [];
      }
    }
}

var output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]