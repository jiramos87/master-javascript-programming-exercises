function getLargestNumberAmongMixedElements(arr) {
    // your code here
    if (arr.length < 1) {  
        return 0;
      }
    
      var numArr = [];  
      for (let i in arr) {  
        if (typeof arr[i] === 'number') {  
          numArr.push(arr[i]); 
        }
      }
    
      if (numArr.length < 1) { 
        return 0;
      }
    
      var largest = numArr[0];  
      for (let i in numArr) {  
        if (numArr[i] > largest) { 
          largest = numArr[i]; 
        }
      }
    
      return largest;
}

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5