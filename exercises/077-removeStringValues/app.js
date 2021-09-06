var obj = {
    name: 'Sam',
    age: 20
  }

function removeStringValues(obj) {
    // your code here
    for(prop in obj) {
        if(typeof obj[prop] === 'string') {
            console.log (typeof obj[prop]);
            delete obj[prop];
        }
    }
}

removeStringValues(obj);
console.log(obj); // { age: 20 }