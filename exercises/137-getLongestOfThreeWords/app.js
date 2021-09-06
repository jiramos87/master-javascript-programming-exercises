function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
  var wordArr = [word1, word2, word3]; 
  var longest = word1;  
  for (let i in wordArr) {  
    if (wordArr[i].length > longest.length) {  
      longest = wordArr[i];  
    }
  }
  return longest;
}

var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'