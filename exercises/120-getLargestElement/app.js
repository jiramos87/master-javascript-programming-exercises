function getLargestElement(arr) {
  // your code here
    if(arr.length > 1) {
        return Math.max(...arr);
    } else {
        return 0;
    }
}
var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;