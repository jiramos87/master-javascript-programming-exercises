// Write your function here
function select(arr, obj) {
    let obj2 = {};
    for(var i = 0; i < arr.length; i++) {
        for(prop in obj) {
            if(arr[i] === prop) {
                obj2[arr[i]] = obj[prop];
            }
        }
    }
    return obj2;
}

var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); 