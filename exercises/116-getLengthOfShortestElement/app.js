function getLengthOfShortestElement(arr) {
    // your code here
    var length = 0;
    var arr2 = [];
   
    if( arr.length === 0) {
        return 0;
    } else {
        for(var i = 0; i < arr.length; i++) {
            arr2[i] = arr[i].length;
        }
        console.log(arr2);
        length = Math.min.apply(Math, arr2);
        return length;
    }
}
var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3