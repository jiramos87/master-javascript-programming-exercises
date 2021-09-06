

function convertDoubleSpaceToSingle(str) {
    // your code here
    let str2 = str.split('  ');
    let str3 = str2.join(' ');
    console.log(str3);
    return str3;

}
var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"