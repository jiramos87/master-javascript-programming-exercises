function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    let final = preTaxAndTipAmount * (1+(0.095 + 0.15));
    final = parseInt(final * 100);
    console.log(final/100);
    return final / 100;
}
var output = calculateBillTotal(20);
console.log(output); // --> 24.9