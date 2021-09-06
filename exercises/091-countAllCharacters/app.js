// Write your function here
function countAllCharacters(str) {
    let obj = {};
    for(var i = 0; i < str.length; i++) {
        if(str[i] in obj) {
            obj[str[i]] += 1;
        } else {
            obj[str[i]] = 1;
        }
    }
    return obj;
}