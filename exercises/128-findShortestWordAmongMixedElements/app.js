function findShortestWordAmongMixedElements(arr) {
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

    var shortestStr = stringArr[0];  
    for (let i in stringArr) {  
        if (stringArr[i].length < shortestStr.length) {  
         shortestStr = stringArr[i];  
        }
    }

    return shortestStr;
}
var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'