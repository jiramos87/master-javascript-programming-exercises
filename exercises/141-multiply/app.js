function multiply(num1, num2) {
    // your code here
    var product = 0;
    
    for(var i = 0; i < Math.abs(num2); i++) {
        product += num1;
        console.log(product);
    }
    if(num1 < 0 || num2 < 0) {
        product *= -1;
    }
    return product;
}

var output = multiply(4, 7);
var output2 = multiply(5, -5)
console.log(output); // --> 28
console.log(output2);