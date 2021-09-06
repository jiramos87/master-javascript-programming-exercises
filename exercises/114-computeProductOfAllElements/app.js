function computeProductOfAllElements(arr) {
    // your code here
    var product = 0;
    
    if(arr.length > 1) {
        product = 1;
        for(var i = 0; i < arr.length; i++) {
            product *= arr[i];
        }
    }
    return product;
}

var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60