// https://www.codewars.com/kata/5208f99aee097e6552000148/

// complete the function
const solution = (string) => {
  const addSpace = (match) => {
    return ` ${match}`;
  };
  return string.replace(/[A-Z]/g, addSpace);
};

console.log(solution('camelCasing'), 'camel Casing', 'Unexpected result');
console.log(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result');

// best practice in codewars
// it's capture and return captured value with space
//
// function solution(string) {
//   return string.replace(/([A-Z])/g, ' $1');
// }
