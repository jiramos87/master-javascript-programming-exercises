function removeOddValues(obj) {
    // your code here
    for(prop in obj) {
        if(obj[prop] % 2 == 1) {
            delete obj[prop];
        }
    }

}