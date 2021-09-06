// Write your function here
function getNthElementOfProperty(obj, key, n) {
    let elem;
    console.log('obj length:'+ obj.length);
    if(n > obj.length) {
        return undefined;
    } else {
        for(prop in obj) {
            if(prop === key) {
                    if (Array.isArray(obj[prop]) && obj[prop] != null) {
                        return obj[prop][n]; 
                } else {
                    return undefined;
                }
            }
        }
    }
}

