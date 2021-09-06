function findSmallestNumberAmongMixedElements(arr) {
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

  var smallest = numArr[0];  
  for (let i in numArr) {  
    if (numArr[i] < smallest) { 
      smallest = numArr[i]; 
    }
  }

  return smallest;
}

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4