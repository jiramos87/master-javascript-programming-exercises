function convertObjectToList(obj) {
  // your code here
  var outputArr = []
  for (props in obj) {
    var pairArr = [props, obj[props]];
    outputArr.push(pairArr);
  }
  return outputArr;

}

var output = convertObjectToList({
  a : 'a',
  number : 11,
  hungry : true,
  grammyWins : 1
});

console.log(output);