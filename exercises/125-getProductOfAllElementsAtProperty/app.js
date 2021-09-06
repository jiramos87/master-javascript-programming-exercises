var obj = {
  key: [1, 2, 3, 4]
};

function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    
    if  (!Array.isArray(obj[key])  || obj[key].length < 1 || (!obj[key])) {
      return 0;  
    }

    var product = 1; 
    for (var i = 0; i < obj[key].length; i++) {  
      product *= obj[key][i]; 
    }
    return product;
   
    
}
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24