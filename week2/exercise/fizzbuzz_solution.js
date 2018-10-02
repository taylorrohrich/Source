// declare the function (note any code you write here won't run until we call the function below)
function fizzbuzz() {
  for (let i = 1; i <= 100; i++) {
    // check if i is multiple of 3 AND 5
    // NOTE: could also check if multiple of 15, as the fact 3 and 5
    // are relatively prime means i is multiple of 3 and 5 if and only if
    // i is multiple of 15
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Fizzbuzz");
    } else if (i % 3 === 0) {
      // if that case doesn't work, we check the other two conditions;
      // note we're using if-else to make sure only ONE of the cases applies
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// ...and here, we actually CALL the function

fizzbuzz();
