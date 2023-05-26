// [Easy] 1408. String Matching in an Array
// 1408_string_matching_in_an_array

// https://leetcode.com/problems/string-matching-in-an-array
// Runtime: 96 ms, faster than 100.00% of TypeScript online submissions for String Matching in an Array.
// Memory Usage: 40.1 MB, less than 100.00% of TypeScript online submissions for String Matching in an Array.
const isSubset = (arr: string[], str: string): boolean => {
  const containCount = arr.reduce((acc: number, cur: string): number => cur.includes(str) ? acc + 1 : acc, 0)
  return containCount > 1
}

function stringMatching (words: string[]): string[] {
  const resultArr: string[] = []
  words.forEach(word => {
    if (isSubset(words, word)) {
      resultArr.push(word)
    }
  })

  return resultArr
}
