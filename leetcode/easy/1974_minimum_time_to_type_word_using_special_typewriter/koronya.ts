// [Easy] 1974. Minimum Time to Type Word Using Special Typewriter
// 1974_minimum_time_to_type_word_using_special_typewriter

// https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter
// Runtime: 84 ms, faster than 100.00% of TypeScript online submissions for Minimum Time to Type Word Using Special Typewriter.
// Memory Usage: 41.5 MB, less than 10.00% of TypeScript online submissions for Minimum Time to Type Word Using Special Typewriter.

const ALPHABET_LENGTH: number = 26

const getMinimumDistance = (a: string, b: string): number => {
  const charCodeA: number = a.charCodeAt(0)
  const charCodeB: number = b.charCodeAt(0)
  const smallerCode: number = Math.min(charCodeA, charCodeB)
  const biggerCode: number = Math.max(charCodeA, charCodeB)
  const candidateA: number[] = [smallerCode, smallerCode + ALPHABET_LENGTH]

  return Math.min(...candidateA.map((item) => Math.abs(biggerCode - item)))
}

getMinimumDistance('a', 'a') //?
getMinimumDistance('a', 'c') //?
getMinimumDistance('a', 'x') //?

getMinimumDistance('a', 'b') //?
getMinimumDistance('b', 'z') //?
getMinimumDistance('z', 'a') //?

function minTimeToType(word: string): number {
  let prevStr: string = 'a'
  const wordLen: number = word.length
  let result: number = wordLen
  for (let i: number = 0; i < wordLen; i += 1) {
    const str: string = word[i]
    result += getMinimumDistance(prevStr, str)
    prevStr = str
  }

  return result
}

minTimeToType('abc') //?
minTimeToType('bza') //?
minTimeToType('zjpc') //?
