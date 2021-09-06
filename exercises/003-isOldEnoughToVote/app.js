var oldEnough = false;

function isOldEnoughToVote(age) {
  if(age >= 18) {
    return true;
  } else {
    return false;
  }
};

oldEnough = isOldEnoughToVote(prompt('how old are you?'));

if(oldEnough) {
    console.log('you are old enough to vote in the US');
  } else {
    console.log('you are too young to vote in the US');
}
