function isRotated(str1, str2) {
    // your code here
    var arr1 = new Array(str1.length);
    var arr2 = []

    for(var k = 0; k < str2.length; k++) {
        arr2[k] = str2[k];
    }

    for(var i = 0; i < str1.length; i++) {
        for(var j = 1; j < str1.length - i; j++) {
            if((i + j) < str1.length) {
                arr1[i + j] = str1[i];
                console.log(arr1);
                    console.log(arr2);
                if(arr1 === arr2) {
                    
                    return true;
                } else {
                    return false;
                }
            } else {
                arr1[(length - j - 1)* -1] = str1[i];
                console.log(arr1);
                    console.log(arr2);
                if(arr1 === arr2) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }
    

    
    
   
    
    
}

console.log(isRotated('hello world', 'orldhello w')) // => true
console.log(isRotated('hello world', 'omrel wp')) // => false