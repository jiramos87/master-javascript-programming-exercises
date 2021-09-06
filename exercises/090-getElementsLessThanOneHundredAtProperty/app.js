// Write your function here
function getElementsLessThan100AtProperty(obj, key) {
    let arr = [];
    for(prop in obj) {
        if(prop = key && obj[prop] != null ) {
            if(Array.isArray(obj[prop])) {
                for(var i = 0; i < obj[prop].length; i++) {
                    if (obj[prop][i] < 100) {
                        arr.push(obj[prop][i]);
                    }
                }
            } else {
                return [];
            }
        } else {
            return [];
        }
    } 
}