// [Medium] 1513. Number of Substrings With Only 1s
// 1513_number_of_substrings_with_only_1s

// https://leetcode.com/problems/number-of-substrings-with-only-1s
// Runtime: 81 ms, faster than 83.33% of TypeScript online submissions for Number of Substrings With Only 1s.
// Memory Usage: 45.8 MB, less than 33.33% of TypeScript online submissions for Number of Substrings With Only 1s.

const getNSum = (n: number): number => {
  let result = 0
  for (let i: number = 0; i < n; i += 1) {
    result += n - i
  }
  return result
}

const MOD = 10 ** 9 + 7

function numSub(s: string): number {
  const sLen = s.length
  let count = 0
  let continueOneCount = 0

  for (let i: number = 0; i < sLen; i += 1) {
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
