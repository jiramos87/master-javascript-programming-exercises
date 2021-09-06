function transformFirstAndLast(array) {
  // your code here
  var obj = {};
  obj[array[0]] = array[array.length - 1];
  console.log(obj);
  
}
transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']);
transformFirstAndLast(['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey']);