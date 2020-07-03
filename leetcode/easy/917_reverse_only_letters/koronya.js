// [Easy] 917. Reverse Only Letters
// 917_reverse_only_letters

// https://leetcode.com/problems/reverse-only-letters
// Runtime: 56 ms, faster than 90.97% of JavaScript online submissions for Reverse Only Letters.
// Memory Usage: 33.5 MB, less than 96.97% of JavaScript online submissions for Reverse Only Letters.
const reverseOnlyLetters = S => {
  const map = new Map()
  const engReg = /[a-zA-Z]/
  const strArr = []

  S.split('').map((char, index) => {
    if (engReg.test(char)) {
      strArr.push(char)
    } else {
      map.set(index, char)
    }
  })

  return S.split('').map((_, index) => {
    if (map.has(index)) {
      return map.get(index)
    } else {
      return strArr.pop()
    }
  }).join('')
}
