function flipPairs(input){
    // your code here
    var flipped = '';
    

    for(var i = 0; i < input.length; i += 2) {
        if(input[i + 1] != undefined) {
        flipped += input[i + 1] + input[i];
        } else {
            flipped += input[i];   
        }
        
    }

    

    return flipped;
}

var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
