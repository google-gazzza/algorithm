// remove-the-parentheses
// Remove the parentheses
// difficulty: 6kyu
// https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8/solutions/javascript

const removeParentheses = (s) => {
  const startIndex = s.lastIndexOf('(');
  const endIndex = startIndex + s.slice(startIndex).indexOf((')'));
  s = s.slice(0, startIndex).concat(s.slice(endIndex + 1));
  return /\(/.test(s) ? removeParentheses(s) : s;
};


console.log(removeParentheses("example(unwanted thing)example"), "exampleexample");
console.log(removeParentheses("example (unwanted thing) example"), "example  example");
console.log(removeParentheses("a (bc d)e"), "a e");
console.log(removeParentheses("a(b(c))"), "a");
console.log(removeParentheses("hello example (words(more words) here) something"), "hello example  something");
console.log(removeParentheses("(first group) (second group) (third group)"), "  ");
