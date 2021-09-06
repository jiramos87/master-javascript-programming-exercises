function getAllKeys(obj) {
  // your code here
  var arr = []
  for (props in obj) {
    arr.push(props)
  }
  return arr;

}

var output = getAllKeys({
  a : 'a',
  number : 11,
  hungry : true,
  grammyWins : 1
});

console.log(output);