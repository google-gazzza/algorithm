// [JS][6kyu] Remove the parentheses
// remove-the-parentheses
// https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8/train/javascript

const removeParentheses = (s) => {
  let result = ''
  let parenCount = 0
  for (char of s) {
    if (char === '(') {
      parenCount += 1
    } else if (char === ')') {
      parenCount -= 1
    } else {
      if (parenCount === 0) {
        result += char
      }
    }
  }

  return result
}

removeParentheses('example(unwanted thing)example') === 'exampleexample'
removeParentheses('example (unwanted thing) example') === 'example  example'
removeParentheses('a (bc d)e') === 'a e'
removeParentheses('a(b(c))') === 'a'
removeParentheses('hello example (words(more words) here) something') === 'hello example  something'
removeParentheses('(first group) (second group) (third group)') === '  '
