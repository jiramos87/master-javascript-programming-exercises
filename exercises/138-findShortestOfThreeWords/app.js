function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
  var wordArr = [word1, word2, word3]; 
  var shortest = word1;  
  for (let i in wordArr) {  
    if (wordArr[i].length < shortest.length) {  
      shortest = wordArr[i];  
    }
  }
  return shortest;
}
var output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'