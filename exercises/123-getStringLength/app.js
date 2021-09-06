function getStringLength(string) {
    // your code here
    let counter = 0;
    for(var i in string) {
        counter++;
    }
    return counter;
}

var output = getStringLength('hello');
console.log(output); // --> 5