const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program

// Try and describe the purpose / rationale behind each step
// In the first line a variable penceString is being declared and assigned a string value of 399p

// penceStringWithoutTrailingP constant stores the numeric part of penceString by removing the trailing "p"

// paddedPenceNumberString is adding leading zeros to the numeric part of penceString to ensure
// it has at least 3 digits, which is necessary for correctly separating pounds and pence

// pounds constant extracts the pounds part from the padded numeric string by taking all
// characters except the last two

// pence constant extracts the pence part from the padded numeric string by taking the last
// two characters and ensuring it has two digits by padding with zeros if necessary

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
