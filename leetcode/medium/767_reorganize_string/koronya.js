// [Medium] 767. Reorganize String
// 767_reorganize_string

// https://leetcode.com/problems/reorganize-string
// Runtime: 80 ms, faster than 86.97% of JavaScript online submissions for Reorganize String.
// Memory Usage: 39 MB, less than 93.33% of JavaScript online submissions for Reorganize String.

/**
 * @param {string} s
 * @return {string}
 */
const reorganizeString = function (s) {
  const strMap = new Map()
  const sLen = s.length
  for (let i = 0; i < sLen; i += 1 || 0) {
    const str = s[i]
    strMap.set(str, (strMap.get(str) || 0) + 1)
  }
  const sortedArr = [...strMap].sort((a, b) => b[1] - a[1])
  console.log('sortedArr: ', sortedArr)
  if (sortedArr[0][1] > Math.floor((sLen + 1) / 2)) {
    return ''
  }
  let resultArr = []
  let index = 0
  sortedArr.forEach((item) => {
    const [str, occurrence] = item
    for (let i = 0; i < occurrence; i += 1 || 0) {
      if (index >= sLen) {
        index = 1
      }
      resultArr[index] = str
      index += 2
    }
  })

  return resultArr.join('')
}

reorganizeString('aab') //?
reorganizeString('aaabb') //?
reorganizeString('aaab') //?
reorganizeString('aaabbc') //?
reorganizeString('vvvlo') //?
