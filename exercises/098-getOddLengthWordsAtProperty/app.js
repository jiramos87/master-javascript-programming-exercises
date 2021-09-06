// Write your function here
function getOddLengthWordsAtProperty(obj, key) {
    let arr2 = [];
    for (prop in obj) {
        if(prop === key) {
            if(Array.isArray(obj[prop]) && obj[prop] != null) {
                for(var i = 0; i < obj[prop].length; i++) {
                    if(obj[prop][i].length % 2  === 1) {
                        arr2.push();
                    }
                }
                return arr2;
            } else {
                return [];
            }
        } else {
            return [];
        }
    }
}