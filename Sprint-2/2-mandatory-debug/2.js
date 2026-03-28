// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// The last digit of 42 is 3
// The last digit of 105 is 3
// The last digit of 806 is 3

// Explain why the output is the way it is
// =============> write your explanation here
// const num = 103; declares variable num in a global scope and assigns it the value 103.
// The function getLastDigit() does not take any parameters and always returns the last digit
// of the number stored in num, which is 3.

// Finally, correct the code to fix the problem
// =============> write your new code here
function getLastDigitNew(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigitNew(42)}`);
console.log(`The last digit of 105 is ${getLastDigitNew(105)}`);
console.log(`The last digit of 806 is ${getLastDigitNew(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
