// [Medium] 767. Reorganize String
// 767_reorganize_string

// https://leetcode.com/problems/reorganize-string
// Runtime: 80 ms, faster than 94.12% of TypeScript online submissions for Reorganize String.
// Memory Usage: 39.9 MB, less than 100.00% of TypeScript online submissions for Reorganize String.


/**
 * @param {string} s
 * @return {string}
 */
function reorganizeString(s: string): string {
  const strMap = new Map<string, number>()
  const sLen: number = s.length
  for (let i: number = 0; i < sLen; i += 1) {
    const str: string = s[i]
    strMap.set(str, (strMap.get(str) || 0) + 1)
  }
  const sortedArr: [string, number][] = [...strMap].sort((a, b) => b[1] - a[1])
  if (sortedArr[0][1] > Math.floor((sLen + 1) / 2)) {
    return ''
  }
  let resultArr: string[] = []
  let index: number = 0
  sortedArr.forEach((item) => {
    const [str, occurrence] = item
    for (let i: number = 0; i < occurrence; i += 1) {
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
