function detectOutlierValue(string) {
    // your code here
    var obj = {
                even: [],
                odd: []
              };
    var evenArr = [];
    var oddArr = [];
    
    for(var i = 1; i <= string.length + 2; i += 2) {
        if(Number(string[i-1]) % 2 === 0) {
            
            evenArr.push((i + 1) / 2);
            obj['even'] = evenArr;
            
        } else {
           
            oddArr.push((i + 1) / 2);
            obj['odd'] = oddArr;
            
        }
    }


    if(obj['even'].lenght > obj['odd'].length) {
        return obj['even'];
    } else {
        return obj['odd'];
    }

}

// Third number is odd, while the rest of the numbers are even
//var output = detectOutlierValue("2 4 7 8 10");
//console.log(output); // => 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  //=> 2