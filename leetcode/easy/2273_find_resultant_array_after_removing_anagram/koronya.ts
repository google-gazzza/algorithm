// [Easy] 2273. Find Resultant Array After Removing Anagram
// 2273_find_resultant_array_after_removing_anagram

// https://leetcode.com/problems/find-resultant-array-after-removing-anagrams
// Runtime: 153 ms, faster than 50.00% of TypeScript online submissions for Find Resultant Array After Removing Anagrams.
// Memory Usage: 50.6 MB, less than 30.00% of TypeScript online submissions for Find Resultant Array After Removing Anagrams.

function removeAnagrams(words: string[]): string[] {
  let adjustArr: [string, number][] = words.map((word, index) => {
    const wordMap = new Map()
    for (const str of word) {
      wordMap.set(str, (wordMap.get(str) || 0) + 1)
    }
    return [[...wordMap].sort((a, b) => a[0].charCodeAt(0) - b[0].charCodeAt(0)).reduce((acc, cur) => acc + cur[0] + cur[1], ''), index]
  })
  let target = 0
  while (target < adjustArr.length - 1) {
    if (adjustArr[target][0] === adjustArr[target + 1][0]) {
      adjustArr.splice(target + 1, 1)
    } else {
      target += 1
    }
  }

  return adjustArr.map((item) => words[item[1]])
}
