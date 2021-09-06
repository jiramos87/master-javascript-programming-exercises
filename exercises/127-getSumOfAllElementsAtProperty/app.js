var obj = {
    key: [4, 1, 8]
};

function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    var sum = 0;
    if (obj[key] === null || !Array.isArray(obj[key]) || obj[key].length < 1) {
        return 0;
    }
    for (var i in obj[key]) {
        sum += obj[key][i];
    }

    return sum;

}
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13