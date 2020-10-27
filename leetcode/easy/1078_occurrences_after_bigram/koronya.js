// [Easy] 1078. Occurrences After Bigram
// 1078_occurrences_after_bigram

// https://leetcode.com/problems/occurrences-after-bigram/
// Runtime: 68 ms, faster than 92.72% of JavaScript online submissions for Occurrences After Bigram.
// Memory Usage: 38.4 MB, less than 19.21% of JavaScript online submissions for Occurrences After Bigram.
const findOcurrences = (text, first, second) => {
  const textArr = text.split(' ')
  const textArrLen = textArr.length
  let before1 = textArr[0]
  let before2 = textArr[1]
  const resultArr = []
  for (let i = 2; i < textArrLen; i += 1 | 0) {
    const str = textArr[i]
    if (before1 === first && before2 === second) {
      resultArr.push(str)
    }
    before1 = before2
    before2 = str
  }

  return resultArr
}
