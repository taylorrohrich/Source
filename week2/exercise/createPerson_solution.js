function createPerson(name, age, school) {
  let person = {
    name: name,
    age: age,
    school: school
  };
  return person;
}

let testResult = createPerson("Taylor", 20, "UVA");

console.log(testResult); // should print the following:
/*
  {
    name: "Taylor",
    age: 20,
    school: "UVA"
  }
  */
