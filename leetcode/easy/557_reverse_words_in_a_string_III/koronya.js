// [Easy] 557. Reverse Words in a String III
// 557_reverse_words_in_a_string_iii

// https://leetcode.com/problems/reverse-words-in-a-string-iii
// Runtime: 92 ms, faster than 57.28% of JavaScript online submissions for Reverse Words in a String III.
// Memory Usage: 45 MB, less than 14.08% of JavaScript online submissions for Reverse Words in a String III.
const reverseWords = s => {
  const reverseArr = s.split(' ').map(word => word.split('').reverse().reduce((acc, cur) => acc + cur, ''))
  const reverseArrLen = reverseArr.length
  let returnStr = reverseArr[0]
  for (let i = 1; i < reverseArrLen; i++) {
    returnStr += ` ${reverseArr[i]}`
  }
  return returnStr
}

