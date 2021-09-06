var obj = {
    a: 2,
    b: 'remaining',
    c: 4
};
function removeNumberValues(obj) {
    for(prop in obj) {
        if(typeof obj[prop] === 'number') {
            delete obj[prop];
        }
    }
}

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }