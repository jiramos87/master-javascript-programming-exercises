function modulo(num1, num2) {
    // your code here
    var sign;
    var dividend = Math.abs(num1);
    var divisor = Math.abs(num2);

    if(num1 < 0) {
        sign = -1;
    } else {
        sign = 1;
    }

    if (dividend === 0) {
      return 0;
    }
    if (divisor === 0 || isNaN(dividend) || isNaN(divisor)) {
      return NaN;
    }
    
    var counter = dividend;
    while (counter >= divisor) {
      counter -= divisor;
    }
    return sign * counter;
}

var output = modulo(25, 4);
console.log(output); // --> 1