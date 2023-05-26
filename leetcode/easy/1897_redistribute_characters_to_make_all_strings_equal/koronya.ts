// [Easy] 1897. Redistribute Characters to Make All Strings Equal
// 1897_redistribute_characters_to_make_all_strings_equal

// https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal
// Runtime: 84 ms, faster than 93.02% of TypeScript online submissions for Redistribute Characters to Make All Strings Equal.
// Memory Usage: 42.1 MB, less than 51.16% of TypeScript online submissions for Redistribute Characters to Make All Strings Equal.

function makeEqual(words: string[]): boolean {
  const wordsLen: number = words.length
  const strMap = new Map<string, number>()
  words.forEach((word) => {
    const wordLen = word.length
    for (let i: number = 0; i < wordLen; i += 1) {
      strMap.set(word[i], (strMap.get(word[i]) || 0) + 1)
    }
  })
  return [...strMap].every((item) => item[1] % wordsLen === 0)
}

makeEqual(['abc', 'aabc', 'bc']) //?
makeEqual(['ab', 'a']) //?
makeEqual(['abc', 'aabc', 'bc', 'bc']) //?
makeEqual(['abc', 'aabc', 'bc', 'bc', 'aabc']) //?
