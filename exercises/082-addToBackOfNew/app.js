function addToBackOfNew(arr, element) {
    // Write your function here
    let arr2 = [];
    for(var i = 0; i < arr.length; i++) {
        arr2[i] = arr[i];
    }
    arr2.push(element);
    return arr2;
}

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]