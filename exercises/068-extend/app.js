var obj1 = {
    a: 1,
    b: 2
};
var obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    // your code here
    console.log(obj1); 
    console.log(obj2);
    
    for(var property1 in obj1) {
        console.log(obj1[property1]);
        for(var property2 in obj2) {
            console.log(property2);
            if(!(property2 in obj1)) {
                console.log(property1, property2);
                obj1[property2] = obj2[property2];
            } else {

            }
        }
    }
}

extend(obj1, obj2);


console.log(obj1); 
console.log(obj2);