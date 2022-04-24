// [Medium] 1915. Number of Wonderful Substrings
// 1915_number_of_wonderful_substrings

// https://leetcode.com/problems/number-of-wonderful-substrings
// Runtime: 241 ms, faster than 37.50% of JavaScript online submissions for Number of Wonderful Substrings.
// Memory Usage: 61.8 MB, less than 12.50% of JavaScript online submissions for Number of Wonderful Substrings.

const INDEX_OF_J = 10
const CHAR_CODE_OF_LOWER_A = 'a'.charCodeAt(0)

/**
 * @param {string} word
 * @return {number}
 */
const wonderfulSubstrings = function (word) {
  const wordArr = word.split('')
  const countArr = Array.from({ length: 2 ** 10 }).map((_) => 0)
  let result = 0
  let mask = 0
  countArr[0] = 1
  wordArr.forEach((str) => {
    let index = str.charCodeAt(0) - CHAR_CODE_OF_LOWER_A
    mask ^= 1 << index
    result += countArr[mask]
    for (let i = 0; i < INDEX_OF_J; i += 1 || 0) {
      result += countArr[mask ^ (1 << i)]
    }
    countArr[mask] += 1
  })

  return result
}

const isValid = (oddSet) => oddSet.size <= 1

// TLE...
const wonderfulSubstrings2 = function (word) {
  const wordLen = word.length
  let count = 0
  for (let i = 0; i < wordLen; i += 1 || 0) {
    let str = word[i]
    const oddSet = new Set()
    oddSet.add(str)
    count += 1
    let target = i + 1
    while (target < wordLen) {
      let newStr = word[target]
      if (oddSet.has(newStr) === true) {
        oddSet.delete(newStr)
      } else {
        oddSet.add(newStr)
      }
      if (isValid(oddSet) === true) {
        count += 1
      }
      target += 1
    }
  }

  return count
}

wonderfulSubstrings('aba')
wonderfulSubstrings('aabb')
wonderfulSubstrings('he')
