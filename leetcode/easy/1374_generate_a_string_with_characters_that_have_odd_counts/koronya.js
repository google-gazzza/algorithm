// https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts
// Runtime: 48 ms, faster than 94.26% of JavaScript online submissions for Generate a String With Characters That Have Odd Counts.
// Memory Usage: 36 MB, less than 100.00% of JavaScript online submissions for Generate a String With Characters That Have Odd Counts.

const KEYCODE_OF_LOWER_A = 'a'.charCodeAt()
const LENGTH_OF_ALPHABET = 26
const getRandomStringOfLowerCase = () => String.fromCharCode(Math.floor((Math.random() * LENGTH_OF_ALPHABET) + KEYCODE_OF_LOWER_A))

const generateTheString = n => {
  const freqMap = new Map()
  let count = n
  while (count > 0) {
    const str = getRandomStringOfLowerCase()
    const freq = freqMap.get(str) | 0
    if (freq % 2 === 1) {
      if (count >= 2) {
        count -= 2
        freqMap.set(str, freq + 2)
      } else {
        count += freq
        freqMap.delete(str)
      }
    } else {
      count -= 1
      freqMap.set(str, freq + 1)
    }
  }
  return [...freqMap].reduce((acc, cur) => acc + cur[0].repeat(cur[1]), '')
}
