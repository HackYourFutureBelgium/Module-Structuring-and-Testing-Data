let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//  1. Line 1: Number
//  2. Line 2: replaceAll
//  3. Line 1: Number
//  4. Line 2: replaceAll
//  5. Line 3: console.log

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The error is coming from line 4 and line 5 where the replaceAll function is being called. The error is occurring because there is a syntax error in the code. The correct syntax for the replaceAll function should be replaceAll(",", "") instead of replaceAll("," ""). To fix this problem, we need to add a comma between the two arguments in the replaceAll function calls.
// c) Identify all the lines that are variable reassignment statements
// 1. Line 1: carPrice
// 2. Line 2: priceAfterOneYear

// d) Identify all the lines that are variable declarations
// 1. Line 1: let carPrice = "10,000";
// 2. Line 2: let priceAfterOneYear = "8,543";


// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// The expression Number(carPrice.replaceAll(",","")) is first calling the replaceAll function on the carPrice variable, which is a string. The replaceAll function is replacing all occurrences of the comma character (",") with an empty string (""). This effectively removes the commas from the string. After that, the Number function is called on the resulting string to convert it into a number data type. The purpose of this expression is to convert the carPrice string, which contains commas, into a numerical value that can be used for calculations.

