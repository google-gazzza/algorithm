/*
regex-password-validation

# codewars/5kyu/Regex Password Validation
Difficulty: 5kyu
URL: https://www.codewars.com/kata/52e1476c8147a7547a000811/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

function validate(password) {
  return /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=\w{6,})(?=^\w+$)/.test(password);
}

// test
console.log(!validate('fjd3IR9.;'));
console.log(validate('djI38D55'), 'djI38D55 - Expected true');
console.log(!validate('a2.d412'), 'a2.d412 - Expected false');
console.log(!validate('JHD5FJ53'), 'JHD5FJ53 - Expected false');
console.log(!validate('!fdjn345'), '!fdjn345 - Expected false');
console.log(!validate('jfkdfj3j'), 'jfkdfj3j - Expected false');
console.log(!validate('123'), '123 - Expected false');
console.log(!validate('abc'), 'abc - Expected false');
console.log(validate('Password123'), 'Password123 - Expected true');
