var oldEnough = false;

function isOldEnoughToDrive(age) {
  // your code here
  
  if(age >= 16) {
     return true;
  } else {
    return false;
  }
} 

oldEnough = isOldEnoughToDrive(prompt('What is your age?'));

if(oldEnough) {
    console.log('you are old enough to drive in the US');
} else {
    console.log('you are too young to drive in the US');
}