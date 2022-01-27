// [Hard] 68. Text Justification
// 68_text_justification

// https://leetcode.com/problems/text-justification
// Runtime: 78 ms, faster than 56.93% of JavaScript online submissions for Text Justification.
// Memory Usage: 42.2 MB, less than 5.24% of JavaScript online submissions for Text Justification.

const SPACE_STR = ' '

const getDistributedString = (arr, maxWidth, isLast = false) => {
  const sumOfWordLen = arr.reduce((acc, cur) => acc + cur.length, 0)
  const arrLen = arr.length
  const diff = maxWidth - sumOfWordLen
  if (arrLen === 1) {
    return arr[0] + SPACE_STR.repeat(diff)
  }
  if (isLast === true) {
    return arr.reduce((acc, cur, index) => (index === arrLen - 1 ? acc + cur : acc + cur + SPACE_STR), '').padEnd(maxWidth, SPACE_STR)
  }
  const min = Math.floor(diff / (arrLen - 1))
  let rest = diff - min * (arrLen - 1)
  const repeatArr = Array.from({ length: arrLen - 1 }).map(() => min)
  for (let i = 0; i < rest; i += 1 || 0) {
    repeatArr[i] += 1
  }
  const getRepeatedStr = (index) => (index === arrLen - 1 ? '' : SPACE_STR.repeat(repeatArr[index]))
  return arr.reduce((acc, cur, index) => acc + cur + getRepeatedStr(index), '')
}

// getDistributedString(['shall', 'be'], 16, true)
// getDistributedString(['for', 'your', 'country'], 16, true)
// getDistributedString(['this', 'is', 'an'], 16)
// getDistributedString(['example', 'of', 'text'], 16)
// getDistributedString(['justification.'], 16)
// getDistributedString(['thisisan'], 8)
// getDistributedString(['thisisan'], 9)

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
const fullJustify = function (words, maxWidth) {
  const wordsLen = words.length
  let width = 0
  let count = 0
  let arr = []
  const resultArr = []
  while (count < wordsLen) {
    const word = words[count]
    const wordLen = word.length
    count += 1
    if (width === 0) {
      width = wordLen
      arr.push(word)
    } else {
      if (width + wordLen + 1 <= maxWidth) {
        width += wordLen + 1
        arr.push(word)
      } else {
        resultArr.push(arr)
        width = wordLen
        arr = [word]
      }
    }
  }
  const finalArr = resultArr.map((item) => getDistributedString(item, maxWidth))
  finalArr.push(getDistributedString(arr, maxWidth, true))

  return finalArr
}

// fullJustify(['123456789', 'is', 'an', 'of', 'text'], 10)
// fullJustify(['This', 'is', 'an', 'example', 'of', 'text', 'justification.'], 16)
// fullJustify(['This', 'is', 'an', 'example', 'of', 'text', 'justification.', 'This', 'is', 'cake'], 16)
// fullJustify(['What', 'must', 'be', 'acknowledgment', 'shall', 'be'], 16)
// fullJustify(
//   ['Science', 'is', 'what', 'we', 'understand', 'well', 'enough', 'to', 'explain', 'to', 'a', 'computer.', 'Art', 'is', 'everything', 'else', 'we', 'do'],
//   20,
// )
