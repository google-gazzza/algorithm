// https://leetcode.com/problems/valid-anagram
// Runtime: 64 ms, faster than 89.89% of JavaScript online submissions for Valid Anagram.
// Memory Usage: 36.9 MB, less than 53.06% of JavaScript online submissions for Valid Anagram.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => isSameMap(getMap(s), getMap(t))

const getMap = str => {
  const map = new Map()
  str.split('').map(item => {
    const val = map.has(item)
      ? map.get(item) + 1
      : 1
    map.set(item, val)
  })
  return map
}

const isSameMap = (m1, m2) => {
  const m1Iterator = m1.entries()
  let nextM1 = m1Iterator.next()
  while (!nextM1.done) {
    const [key, value] = nextM1.value
    if (m2.get(key) !== value) {
      return false
    }
    m1.delete(key)
    m2.delete(key)
    nextM1 = m1Iterator.next()
  }
  return m1.size === m2.size
}
