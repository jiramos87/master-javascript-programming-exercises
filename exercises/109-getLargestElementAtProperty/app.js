var obj = {
  key: [1, 2, 4]
};
function getLargestElementAtProperty(obj, key) {
    // your code here
    if (obj[key] === undefined) {
      return [];
    }
    for(prop in obj) {
      if(prop = key) {
        if(obj[prop] === [] || !Array.isArray(obj[prop]) || obj[prop].length < 1) {
          return [];
        } else {
          return Math.max(...obj[prop]);
        }
      } else {
        return [];
      }
    }
}
var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4