function findSmallestElement(arr) {
    // your code here
    var smallest = 0;
    if(arr.length > 1) {
        return Math.min(...arr);
    } else {
        return smallest;
    }
    
}
var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1