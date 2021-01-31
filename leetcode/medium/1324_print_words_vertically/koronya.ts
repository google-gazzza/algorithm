// [Medium] 1324. Print Words Vertically
// 1324_print_words_vertically

// https://leetcode.com/problems/print-words-vertically
// Runtime: 132 ms, faster than 100.00% of TypeScript online submissions for Print Words Vertically.
// Memory Usage: 38.7 MB, less than 100.00% of TypeScript online submissions for Print Words Vertically.

/**
 * @param {string} s
 * @return {string[]}
 */
function printVertically(s: string): string[] {
  const items: string[] = s.split(' ')
  const itemsLen: number = items.length
  const maxLen: number = Math.max(...items.map((item) => item.length))
  const resultArr: string[] = []
  for (let i = 0; i < maxLen; i += 1) {
    resultArr.push('')
  }
  for (let i: number = 0; i < itemsLen; i += 1) {
    const item: string = items[i]
    for (let j: number = 0; j < maxLen; j += 1) {
      const str: string = item[j]
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
