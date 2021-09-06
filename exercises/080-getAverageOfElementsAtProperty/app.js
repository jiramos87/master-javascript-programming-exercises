// Write your function here
function getAverageOfElementsAtProperty(obj, key) {
    let sum = 0;
    for(prop in obj) {
        if (obj[key] = undefined){
            return 0;
        }
        if(prop = key) {
            if(Array.isArray(obj[prop])) {
                if(obj[prop] != null) {
                    for(var i = 0; i < obj[prop].length; i++) {
                        sum += obj[prop][i];
                    }
                    return sum / (obj[prop].length);
                } else {
                    return 0;
                }
            } 
                        
        } 
    }
}
