function getLongestWordOfMixedElements(arr) {
    // your code here
    if (arr.length < 1) {  
        return '';
    }

    stringArr = []; 
    for (let i in arr) {  
      if (typeof arr[i] === 'string') { 
        stringArr.push(arr[i]);  
        }
    }

    if (stringArr.length < 1) {  
    return '';
    }

    var longestStr = stringArr[0];  
    for (let i in stringArr) {  
        if (stringArr[i].length > longestStr.length) {  
         longestStr = stringArr[i];  
        }
    }

    return longestStr;
}

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'