/*
2299-strong-password-checker-ii
leetcode/easy/2299. Strong Password Checker II
URL: https://leetcode.com/problems/strong-password-checker-ii/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function strongPasswordCheckerII(password: string): boolean {
  if (password.length < 8) {
    return false;
  }

  for (let i = 0; i < password.length - 1; i += 1) {
    if (password[i] === password[i + 1]) {
      return false;
    }
  }

  let hasLowerCase = false;
  let hasUpperCase = false;
  let hasDigit = false;
  let hasSpecial = false;

  if (password.match(/[a-z]/)) {
    hasLowerCase = true;
  }
  if (password.match(/[A-Z]/)) {
    hasUpperCase = true;
  }
  if (password.match(/\d/)) {
    hasDigit = true;
  }
  if (password.match(/[!@#$%^&*()\-\\+]/)) {
    hasSpecial = true;
  }

  return hasLowerCase && hasUpperCase && hasDigit && hasSpecial;
}

let password = 'IloveLe3tcode!';
console.log(strongPasswordCheckerII(password));
// Output: true

password = 'Me+You--IsMyDream';
console.log(strongPasswordCheckerII(password));
// Output: false

password = '1aB!';
console.log(strongPasswordCheckerII(password));
// Output: false

password = '-Aa1a1a1';
console.log(strongPasswordCheckerII(password));
// treu

password = 'aA0!bB1@@3rbHkB8Puvl';
console.log(strongPasswordCheckerII(password));
// false
