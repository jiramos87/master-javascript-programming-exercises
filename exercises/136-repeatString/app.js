function repeatString(string, num) {
    // your code here
    var outputStr = '';
    for(var i = 0; i < num; i++) {
        outputStr += string;
    }
    return outputStr;
}

var output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'