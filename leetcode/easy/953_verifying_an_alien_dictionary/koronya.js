// [Easy] 953. Verifying an Alien Dictionary
// 953_verifying_an_alien_dictionary

// https://leetcode.com/problems/verifying-an-alien-dictionary
// Runtime: 80 ms, faster than 58.30% of JavaScript online submissions for Verifying an Alien Dictionary.
// Memory Usage: 38.6 MB, less than 9.42% of JavaScript online submissions for Verifying an Alien Dictionary.
const isAlienSorted = (words, order) => {
  const compare = (prev, next) => {
    const prevLen = prev.length
    const nextLen = next.length
    const minLen = Math.min(prevLen, nextLen)
    for (let i = 0; i < minLen; i = i + 1 | 0) {
      const prevIndex = order.indexOf(prev[i])
      const nextIndex = order.indexOf(next[i])
      if (prevIndex > nextIndex) {
        return false
      } else if (prevIndex < nextIndex) {
        return true
      }
    }
    return prevLen <= nextLen
  }
  const wordsLen = words.length
  let prev = words[0]
  for (let i = 1; i < wordsLen; i = i + 1 | 0) {
    const next = words[i]
    if (compare(prev, next) === false) {
      return false
    }
    prev = next
  }
  return true
}
