
function getAllLetters(str) {
    // your code here
    if(str === []) {
        return [];
    } else {
        let char = str.split('');
        console.log(char);
        return char;
    }
}
