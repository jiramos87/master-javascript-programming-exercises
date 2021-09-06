function flipEveryNChars(input, n) {
    // your code here
    var flipped = '';
    

    for(var i = 0; i < input.length; i += n) {
        if(input[i + n] != undefined) {
            for( var j = n; j > 0; n--) {
                flipped += input[i + j - 1] ;
                console.log(flipped);
            }
        } else {
            for( var j = n; j > 0; n--) {
                flipped += input[i - 1];
                console.log(flipped);   
            }
        }
        
    }

    return flipped;
}

var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma