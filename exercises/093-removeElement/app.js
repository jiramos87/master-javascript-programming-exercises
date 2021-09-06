// Write your function here
function removeElement(arr, dis) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === dis) {
            arr.splice(i, 1);
        }
    }
    return arr;
}