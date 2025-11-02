
let passwordValidator = function(password) {
  if (password.length !== 8) {
    return false;
  }

  let hasUpperCaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let hasLowerCaseLetter = "abcdefghijklmnopqrstuvwxyz";
  let hasOneDigit = "0123456789";

  let hasUpper = false;
  let hasLower = false;
  let hasDigit = false;

  for (let i = 0; i < password.length; i++) {
    let ch = password[i];

    if (hasUpperCaseLetter.includes(ch)) {
      hasUpper = true;
    } else if (hasLowerCaseLetter.includes(ch)) {
      hasLower = true;
    } else if (hasOneDigit.includes(ch)) {
      hasDigit = true;
    }
  }

  // Return true only if all conditions are met
  return hasUpper && hasLower && hasDigit;
};

console.log(passwordValidator("01aB3456")); // ✅ true
console.log(passwordValidator("01234567A")); // ❌ false (no lowercase)
console.log(passwordValidator("abcdefGH"));  // ❌ false (no digits)
console.log(passwordValidator("AB123456"));  // ❌ false (no lowercase)

module.exports = passwordValidator;