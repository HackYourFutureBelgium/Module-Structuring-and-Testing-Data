// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error
// num variable is not declared
// The function argument is a number and not a variable.
// A variable argument is expected in the function definition
// =============> write your prediction of the error here
function square(3) {
    return num * num;
}

// =============> write the error message here
// function square(3) {
//                 ^
// SyntaxError: Unexpected number

// =============> explain this error message here
// A variable argument is expected in the function but instead a number is given

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
  return num * num;
}
console.log(square(8));