// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

const solution = (str, ending) => str.endsWith(ending);

console.log(solution('abcde', 'cde'), true)
console.log(solution('abcde', 'abc'), false)
