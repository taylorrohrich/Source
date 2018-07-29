/*
Complete the 'convertObjects' function, that takes in an object array of people,
determines if they are old enough to *legally* drink, and adds a field "isLegal" to each person in the object array.
NOTE: the returned object CANNOT modify the original object: its needs to be a DEEP COPY
*/

// skeleton code for your function
function convertObjects(people) {
  /*
    Try to use a 'map' function instead of a for loop!
    */
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
//     age: 20,
//     isLegal: false
//   }
// ];

console.log(testData); // should print the original testData UNMODIFIED (i.e. no isLegal field)
