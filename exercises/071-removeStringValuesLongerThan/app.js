function removeStringValuesLongerThan(num, obj) {
    // your code here
    for(prop in obj) {
        if(obj[prop].length > num) {
            delete obj[prop];
        }
    }

}
