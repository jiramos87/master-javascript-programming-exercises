function findShortestElement(arr) {
    // your code here
    var str = '';
    var shortestLength = 100;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i].length < shortestLength) {
            shortestLength = arr[i].length;
            str = arr[i];
        }
    }
    return str;
}
var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'