function findPairForSum(array, number){
  
    var pair = [];

    for(var i = 0; i < array.length - 1; i++) {
        for(var j = 1; j < array.length - i; j++ )
            if((array[i] + array[i + j]) === number) {
                pair.push(array[i]);
                pair.push(array[i + j]);
                return pair;
            } 
    }
    

}

//var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);


var pair = findPairForSum([1, 2, 3, 4, 5], 7)
console.log(pair);  //--> [4, 3]