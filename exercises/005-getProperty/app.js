var car = {
  model: 'Toyota'
};

function getProperty(obj, key) {
  if(key in obj) {
  
    let keyString = obj[key];
    return keyString;
  } else {
    return undefined;
  }
}

var output = getProperty(car, 'model');

console.log(output);

