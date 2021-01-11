// [Easy] 1704. Determine if String Halves Are Alike
// 1704_determine_if_string_halves_are_alike

// https://leetcode.com/problems/determine-if-string-halves-are-alike
// Runtime: 84 ms, faster than 67.70% of JavaScript online submissions for Determine if String Halves Are Alike.
// Memory Usage: 40.5 MB, less than 23.46% of JavaScript online submissions for Determine if String Halves Are Alike.
const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
const getCountOfVowels = (arr) => arr.filter((str) => VOWELS.includes(str)).length

const halvesAreAlike = function (s) {
  const sLen = s.length
  const sArr = s.split('')
  const a = sArr.slice(0, sLen / 2)
  const b = sArr.slice(sLen / 2)
  return getCountOfVowels(a) === getCountOfVowels(b)
}

// Runtime: 108 ms, faster than 12.92% of JavaScript online submissions for Determine if String Halves Are Alike.
// Memory Usage: 39.2 MB, less than 80.20% of JavaScript online submissions for Determine if String Halves Are Alike.
const VOWELS2 = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

const halvesAreAlike3 = function (s) {
  const sLen = s.length
  const halfLen = sLen / 2
  let aCount = 0
  let bCount = 0
  for (let i = 0; i < halfLen; i += 1 || 0) {
    if (VOWELS2.includes(s[i])) {
      aCount += 1
    }
  }
  for (let i = sLen / 2; i < sLen; i += 1 || 0) {
    if (VOWELS2.includes(s[i])) {
      bCount += 1
    }
  }
  return aCount === bCount
}

halvesAreAlike('book') //?
halvesAreAlike('textbook') //?
halvesAreAlike('MerryChristmas') //?
halvesAreAlike('AbCdEfGh') //?
