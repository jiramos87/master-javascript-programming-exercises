function search(arr, target){ 
  //start will be the first index 
  let start = 0
  //end will be last index 
  let end = arr.length-1   
  
  //guess is typically middle of array 
  let guessIndex = Math.floor((end - start) / 2) 

  if(target > arr[end]) return null;
  
  while(end > start){ 
      console.log(start, end)
  if (arr[guessIndex] === target){
      console.log("found at index") 
      return(guessIndex)
  } else if (arr[guessIndex] > target){ 
      //this means our guess was too big. It also means we don't need the end-half of the array. 
      //we reassign end to our guess. Now our array is halved. We also  reassign guess to the middle of the bottom half of 
      //our array. Now end just got closer to start and we have narrowed our search 
      console.log("guess too big && guessIndex", guessIndex)
      end = guessIndex; 
      guessIndex = Math.floor((end + start)/2) -1
      
  } else if (arr[guessIndex] < target){
      //this means our guess was too small we will reset our start to the guess index and look again.
      console.log("guess too small && guessIndex", guessIndex)
      start = guessIndex; 
      guessIndex = Math.ceil((end + start)/2) 
     
  } else { return null}
  }
} 


var arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 31)); // => 4