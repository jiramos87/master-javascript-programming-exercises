function filterOddLengthWords(words) {
    // your code here
    let arr = [];
    for(var i = 0; i < words.length; i++) {
        if(words[i].length % 2 === 1) {
            arr.push(words[i]);
        }
    }
    return arr;
}

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']