const person = {
    firstName: 'Jack',
    lastName: 'Sparrow',
    age: 25,
    location: 'Caribbean sea',
  }

  
  for (var key in person) {
    console.log(key +":"+person[key]);
  }


  console.log(`First name:${person.firstName}\n
Last name: ${person.lastName}\n
Age: ${person.age} ages\n
Where to find: ${person.location}`);