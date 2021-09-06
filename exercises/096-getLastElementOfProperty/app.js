// Write your function here

function getLastElementOfProperty(obj, key) {
    for(prop in obj) {
        if (prop = key) {
            if(Array.isArray(obj[prop]) && obj[prop] != null) {
                return obj[prop][obj[prop].length - 1];    
            } else {
                return undefined;
            }
        } else {
            return undefined;
        }
    }
}