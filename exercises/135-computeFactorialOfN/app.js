function computeFactorialOfN(n) {
    // your code here
    var product = 1;
    for(var i = 1; i <= n; i++) {
        product *= i;
    }
    return product;
}

var output = computeFactorialOfN(3); console.log(output); // --> 6

var output = computeFactorialOfN(4); console.log(output); // --> 24