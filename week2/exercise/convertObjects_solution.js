// skeleton code for your function
function convertObjects(people) {
  // create the new array using .map()
  let modifiedArray = people.map(person => {
    // everything here is a NEW function separate from convertObjects!  it's
    // essentially a function we're "defining on the fly" to act on each of the
    // individual bits in the array, each of which we refer to as "person"

    // to avoid the pass-by-value verus pass-by-reference issue, we're going to
    // make a copy of the object we're modifying
    let personCopy = {
      name: person.name,
      age: person.age
    };

    // now that we've made a copy, we modify the object appropriately and return it
    if (personCopy.age >= 21) {
      personCopy.isLegal = true;
    } else {
      personCopy.isLegal = false;
    }
    return personCopy;
  });

  // return the new array
  return modifiedArray;
}

// now, we're going to test our function on some dummy data we're creating
// note this is an ARRAY (i.e. ordered collection) of multiple OBJECTS (grouping
// of key-value pairs)
let testData = [
  {
    name: "Michael",
    age: 21
  },
  {
    name: "Taylor",
    age: 19
  }
];

let updatedTestData = convertObjects(testData);
console.log(updatedTestData); // should print the MODIFIED array, which would look like this:
// [
//   {
//     name: "Michael",
//     age: 21,
//     isLegal: true
//   },
//   {
//     name: "Taylor",
//     age: 19,
//     isLegal: false
//   }
// ];

console.log(testData); // should print the original testData UNMODIFIED (i.e. no isLegal field)
