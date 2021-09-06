function countCharacter(str, char) {
    // your code here
    let regexp = /letter/gi;
    let matchArrayLength = str.split(char).length - 1;
    return matchArrayLength;
}