function countNumberOfKeys(obj) {
    // your code here
    let counter = 0;
    for(prop in obj) {
        counter++;
    }
    return counter;

}