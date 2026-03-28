// Predict and explain first...
//  =============> write your prediction here
// The sum of 10 and 32 is undefined

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// The function is not returning any value.
// The return statement is empty. The control never reaches
// the expression a+b because the function returns before executing it.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sumNew(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sumNew(10, 32)}`);
