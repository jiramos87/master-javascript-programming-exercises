// Write your function here
function getFirstElementOfProperty(obj, key) {
    for(prop in obj) {
        if (prop = key) {
            if(Array.isArray(obj[prop]) && obj[prop] != null) {
                return obj[prop][0];    
            } else {
                return undefined;
            }
        } else {
            return undefined;
        }
    }
}