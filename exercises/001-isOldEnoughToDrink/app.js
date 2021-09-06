function isOldEnoughToDrink(age){
    // your code here	
    if(age >= 21) {
        return true;
    } else return false;
}

var ageprompt = prompt('What is your age');
if(isOldEnoughToDrink(ageprompt)) {
    console.log('You are old enough to drink in the US');
} else {
    console.log('You are too young to drink in the US');
}
