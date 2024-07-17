// [JS][7kyu] shorter concat [reverse longer]
// shorter-concat-reverse-longer
// https://www.codewars.com/kata/54557d61126a00423b000a45/train/javascript

const getReverseString = (str) => str.split('').reverse().join('')

const shorterReverseLonger = (a, b) => {
  const aLen = a.length
  const bLen = b.length
  const shorter = aLen < bLen ? a : b
  const reverseStr = aLen < bLen ? getReverseString(b) : getReverseString(a)
  return `${shorter}${reverseStr}${shorter}`
}

shorterReverseLonger('hello', 'bau')
shorterReverseLonger('first', 'abcde')
