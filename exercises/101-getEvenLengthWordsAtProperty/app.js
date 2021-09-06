var obj = {
  key: ['a', 'long', 'game']
};
function getEvenLengthWordsAtProperty(obj, key) {
  let arr2 = [];
  if(obj[key] = undefined) {
    return [];
  }
  for (prop in obj) {
      if(prop === key) {
          if(Array.isArray(obj[prop]) && obj[prop] != null) {
              for(var i = 0; i < obj[prop].length; i++) {
                  if(obj[prop][i].length % 2  === 0) {
                      arr2.push();
                  }
              }
              return arr2;
          } else {
              return [];
          }
      } else {
          return [];
      }
  }
}

var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']