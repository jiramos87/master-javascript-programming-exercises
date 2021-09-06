var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};


function addFullNameProperty(obj) {
  // tu codigo aqui
    let fullName = obj.firstName + ' ' + obj.lastName;
    console.log(fullName);
    obj['fullName'] = fullName;
    console.log(obj.fullName);
    
    return obj;
}

addFullNameProperty(person);
console.log(person.fullName);