// Predict and explain first...

// =============> write your prediction here
// 320
// The result of multiplying 10 and 32 is undefined

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// It will first print the result because of console.log
// and then print undefined because console.log returns undefined

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiplyNew(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiplyNew(10, 32)}`);
