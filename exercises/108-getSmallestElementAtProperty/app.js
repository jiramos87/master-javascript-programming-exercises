var obj = {
  key: [2, 1, 5]
};

function getSmallestElementAtProperty(obj, key) {
    if (obj[key] === undefined) {
      return [];
    }
    for(prop in obj) {
      if(prop = key) {
        if(obj[prop] === [] || !Array.isArray(obj[prop]) || obj[prop].length < 1) {
          return [];
        } else {
          return Math.min(...obj[prop]);
        }
      } else {
        return [];
      }
    }

}

var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1