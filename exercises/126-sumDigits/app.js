function sumDigits(num) {
    // your code here
    var str = num.toString();
    var arr = [];
    var sum = 0;

    if(str[0] === '-') {
        arr[0] = '-' + str[1];
        for(var i = 1; i < str.length - 1; i++) {
            arr[i] = str[i + 1]; 
        }
    } else {
        arr[0] = str[0];
        for(var i = 1; i < str.length; i++) {
            arr[i] = str[i];
        }
    }

    for(var i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    return sum;
        
   
    
}
var output = sumDigits(316);
console.log(output); // --> 4