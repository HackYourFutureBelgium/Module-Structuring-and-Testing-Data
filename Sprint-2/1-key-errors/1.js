// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// decimalNumber is already declared in the function argument
// because we are using const to declare it again inside the function
// we are getting an error because we cannot declare a variable with the same name
// twice in the same scope.

// Try playing computer with the example to work out what is going on
function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

// =============> write your explanation here
// decimalNumber is a local variable declared in the argument of the function.
// On using const to declare decimalNumber again, we get an error
// because we cannot declare a variable with the same name twice in the same scope.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentageNew(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentageNew(0.5));
