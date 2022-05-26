// [Medium] 1513. Number of Substrings With Only 1s
// 1513_number_of_substrings_with_only_1s

// https://leetcode.com/problems/number-of-substrings-with-only-1s
// Runtime: 79 ms, faster than 77.08% of JavaScript online submissions for Number of Substrings With Only 1s.
// Memory Usage: 44.3 MB, less than 54.17% of JavaScript online submissions for Number of Substrings With Only 1s.

const getNSum = (n) => {
  let result = 0
  for (let i = 0; i < n; i += 1 || 0) {
    result += n - i
  }
  return result
}

const MOD = 10 ** 9 + 7

/**
 * @param {string} s
 * @return {number}
 */
const numSub = function (s) {
  const sLen = s.length
  let count = 0
  let continueOneCount = 0

  for (let i = 0; i < sLen; i += 1 || 0) {
    let num = s[i]
    if (num === '0') {
      if (continueOneCount > 0) {
        count += getNSum(continueOneCount)
      }
      continueOneCount = 0
    } else {
      continueOneCount += 1
    }
    count %= MOD
  }
  if (continueOneCount > 0) {
    count += getNSum(continueOneCount)
  }

  return count % MOD
}

// TLE
const numSub2 = function (s) {
  const sLen = s.length
  let count = 0
  for (let i = 0; i < sLen; i += 1 || 0) {
    let str = s[i]
    if (str === '1') {
      count += 1
      let index = i + 1
      while (index < sLen && s[index] === '1') {
        count += 1
        index += 1
      }
    }
  }

  return count
}

// numSub('0110111')
// numSub('101')
// numSub('111111')
numSub('1110111')
