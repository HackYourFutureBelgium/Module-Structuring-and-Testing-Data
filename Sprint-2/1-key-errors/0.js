// Predict and explain first...
//  =============> write your prediction here
// str is already declared in the function argument
// because we are using let to declare it again inside the function we are getting an error because we cannot declare a variable with the same name twice in the same scope.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("nikita"));

// =============> write your explanation here
// str is a local variable declared in the argument of the function.
// On using let to declare str again, we get an error
// because we cannot declare a variable with the same name twice in the same scope.

// =============> write your new code here
function capitaliseNew(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitaliseNew("nikita"));
