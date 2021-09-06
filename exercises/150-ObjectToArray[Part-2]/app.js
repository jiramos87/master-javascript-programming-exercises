function listAllValues(obj) {
  // your code here
    // your code here
    var arr = []
    for (props in obj) {
      arr.push(obj[props]);
    }
    return arr;
}
  
var output = listAllValues({
  a : 'a',
  number : 11,
  hungry : true,
  grammyWins : 1
});

console.log(output);
