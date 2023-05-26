// simple-validation-of-a-username-with-regex
// Simple validation of a username with regex
// difficulty: 8kyu
// https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/simple-validation-of-a-username-with-regex

const validateUsr = (username) => {
  return username.length >= 4
    && username.length <= 16
    && (username.match(/[a-z]|_|\d/g).length === username.length);
};


// best practice on codewars
// function validateUsr(username) {
//   /**
//    - `^`        Start from the beginning of the string.
//    - `[]`       Allow any character specified, including...
//    - `a-z`      anything from a to z,
//    - `0-9`      anything from 0 to 9,
//    - `_`        and underscore.
//    - `{4,16}`   Accept 4 to 16 of allowed characters, both numbers included.
//    - `$`        End the string right after specified amount of allowed characters is given.
//    */
//   const validator = /^[a-z0-9_]{4,16}$/;
//
//   return validator.test(username);
// }

console.log(validateUsr('asddsa'), true);
console.log(validateUsr('a'), false);
console.log(validateUsr('Hass'), false);
console.log(validateUsr('Hasd_12assssssasasasasasaasasasasas'), false);
console.log(validateUsr(''), false);
console.log(validateUsr('____'), true);
console.log(validateUsr('012'), false);
console.log(validateUsr('p1pp1'), true);
console.log(validateUsr('asd43 34'), false);
console.log(validateUsr('asd43_34'), true);
