// [Easy] 844. Backspace String Compare
// 844_backspace_string_compare

// https://leetcode.com/problems/backspace-string-compare
// Runtime: 72 ms, faster than 90.97% of JavaScript online submissions for Backspace String Compare.
// Memory Usage: 37.2 MB, less than 55.63% of JavaScript online submissions for Backspace String Compare.
const getTypedStr = (str) => {
  const resultArr = []
  const strLen = str.length
  for (let i = 0; i < strLen; i = i + 1 | 0) {
    const char = str[i]
    if (char === '#') {
      resultArr.pop()
    } else {
      resultArr.push(char)
    }
  }

  return resultArr.reduce((acc, curr) => acc + curr, '')
}

const backspaceCompare = (S, T) => getTypedStr(S) === getTypedStr(T)
