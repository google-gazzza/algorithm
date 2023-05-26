// balanced-braces-with-non-brace-characters
// Balanced Braces (with non-brace characters)
// difficulty: 6kyu
// https://www.codewars.com/kata/5a62173ee626c5f0e40000e9j

const isBalanced = (string) => {
  let braceCharacters = (string.match(/[\(\)\[\]\{\}]/g) || []).join('');
  let count = 0;
  
  while (braceCharacters.match(/\(\)|\[\]|\{\}/)) {
    count += 1;
    braceCharacters = braceCharacters.replace(/\(\)|\[\]|\{\}/, '');
  }
  
  return [!braceCharacters, count, braceCharacters.length];
};


console.log(isBalanced('((()))'), [true, 3, 0]);
console.log(isBalanced('(string[5])'), [true, 2, 0]);
console.log(isBalanced(''), [true, 0, 0]);
console.log(isBalanced('(([()]))'), [true, 4, 0]);
console.log(isBalanced('()[]{}'), [true, 3, 0]);
console.log(isBalanced('([{}])((){}[{}])'), [true, 8, 0]);

console.log(isBalanced('((())'), [false, 2, 1]);
console.log(isBalanced('(string[)5]'), [false, 0, 4]);
console.log(isBalanced('(string[)5])'), [false, 0, 5]);
console.log(isBalanced('('), [false, 0, 1]);
console.log(isBalanced('((()]))'), [false, 1, 5]);
console.log(isBalanced('()[{]{}}'), [false, 2, 4]);
console.log(isBalanced('([{}])()(){}[{}])'), [false, 8, 1]);
