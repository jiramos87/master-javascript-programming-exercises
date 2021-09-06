function isOddWithoutModulo(num) {
    // your code here

    
    var dividend = Math.abs(num);

    if (dividend === 0) {
      return false;
    }
    
    var counter = dividend;
    while (counter >= 2) {
      counter -= 2;
    }
    if(counter != 0) {
        return true;
    } else {
        return false;
    }
}
var output = isOddWithoutModulo(-16);
console.log(output); // --> true