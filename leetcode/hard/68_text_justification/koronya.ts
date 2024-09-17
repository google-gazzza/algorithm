// [Hard] 68. Text Justification
// 68_text_justification

// https://leetcode.com/problems/text-justification
// Runtime: 69 ms, faster than 95.24% of TypeScript online submissions for Text Justification.
// Memory Usage: 44.1 MB, less than 6.35% of TypeScript online submissions for Text Justification.

const SPACE_STR = ' '

const getDistributedString = (arr: string[], maxWidth: number, isLast: boolean = false): string => {
  const sumOfWordLen: number = arr.reduce((acc, cur) => acc + cur.length, 0)
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
  const getRepeatedStr = (index: number): string => (index === arrLen - 1 ? '' : SPACE_STR.repeat(repeatArr[index]))
  return arr.reduce((acc, cur, index) => acc + cur + getRepeatedStr(index), '')
}

function fullJustify(words: string[], maxWidth: number): string[] {
  const wordsLen = words.length
  let width: number = 0
  let count: number = 0
  let arr: string[] = []
  const resultArr: string[][] = []
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
