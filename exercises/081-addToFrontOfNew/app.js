
function addToFrontOfNew(arr, element) {
    // Write your function here
    let arr2 = [];
    for(var i = 0; i < arr.length; i++) {
        arr2[i] = arr[i];
    }
    arr2.unshift(element);
    return arr2;
    
}

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]