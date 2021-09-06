// Write your function here
function computeAverageOfNumbers(arr) {
    let sum = 0;
    if(arr != null) {
        for(var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum / (arr.length);
    } else {
        return 0;
    }
}

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output);