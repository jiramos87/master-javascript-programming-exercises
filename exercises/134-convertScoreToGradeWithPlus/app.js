function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
var grade = '';
  if (score >= 90 && score <= 100){grade = 'A';}
  else if (score >= 80 && score <= 89){grade = 'B';}
  else if (score >= 70 && score <= 79){grade = 'C';}
  else if (score >= 60 && score <= 69){grade = 'D';}
  else if (score >= 0 && score <= 59){grade = 'F';}
  else {grade = 'INVALID SCORE';}
 
  
  var scoreStr = score.toString();  
  var lastDigit = Number(scoreStr[scoreStr.length - 1]);
  if ((score > 59 && score < 100) && (lastDigit <= 2 && lastDigit >= 0)){
    grade += '-';
  } else if ((score > 59 && score < 100) && (lastDigit >= 8 && lastDigit <= 9) || score === 100){
    grade += '+';
  }
  return grade; 
}

var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'