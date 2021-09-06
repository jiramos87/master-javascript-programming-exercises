// Write your function here
function keep(arr, keeper) {
    let arr2 = [];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === keeper) {
            arr2.push(arr.splice(i, 1));
        }
    }
    return arr2;
}