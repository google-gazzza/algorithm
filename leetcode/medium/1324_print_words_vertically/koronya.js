// [Medium] 1324. Print Words Vertically
// 1324_print_words_vertically

// https://leetcode.com/problems/print-words-vertically
// Runtime: 68 ms, faster than 100.00% of JavaScript online submissions for Print Words Vertically.
// Memory Usage: 38.3 MB, less than 84.71% of JavaScript online submissions for Print Words Vertically.

/**
 * @param {string} s
 * @return {string[]}
 */
const printVertically = function (s) {
  const items = s.split(' ')
  const itemsLen = items.length
  const maxLen = Math.max(...items.map((item) => item.length))
  const resultArr = Array.from({ length: maxLen }).fill('')
  for (let i = 0; i < itemsLen; i += 1 || 0) {
    const item = items[i]
    for (let j = 0; j < maxLen; j += 1 || 0) {
      const str = item[j]
      if (str !== undefined) {
        resultArr[j] += str
      } else {
        resultArr[j] += ' '
      }
    }
  }

  return resultArr.map((item) => item.trimEnd())
}

printVertically('HOW ARE YOU') //?
printVertically('CONTEST IS COMING') //?
printVertically('TO BE OR NOT TO BE') //?
