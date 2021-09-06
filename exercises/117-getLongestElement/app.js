function getLongestElement(arr) {
    // your code here
    var str = '';
    var longestLength = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i].length > longestLength) {
            longestLength = arr[i].length
            str = arr[i];
        }
    }
    return str;
}
var output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'