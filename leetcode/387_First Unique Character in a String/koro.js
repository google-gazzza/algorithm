// https://leetcode.com/problems/first-unique-character-in-a-string/submissions/
// Runtime: 132 ms, faster than 11.86% of JavaScript online submissions for First Unique Character in a String.
// Memory Usage: 42.8 MB, less than 10.00% of JavaScript online submissions for First Unique Character in a String.

/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
  const freqMap = new Map()
  s.split('').map((item, index) => {
    const freq = freqMap.has(item) ? freqMap.get(item).freq + 1 : 1
    freqMap.set(item, {freq, index})
  })
  const mapIterator = freqMap.entries()
  let next = mapIterator.next()
  while (!next.done) {
    const {freq, index} = next.value[1]
    if (freq === 1) {
      return index
    }
    next = mapIterator.next()
  }
  return -1
}
