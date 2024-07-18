// [Medium] 1641. Count Sorted Vowel Strings
// 1641_count_sorted_vowel_strings

// https://leetcode.com/problems/count-sorted-vowel-strings
// Runtime: 76 ms, faster than 88.46% of JavaScript online submissions for Count Sorted Vowel Strings.
// Memory Usage: 38.3 MB, less than 86.15% of JavaScript online submissions for Count Sorted Vowel Strings.
// with memoization! 더 빠르다!
const N = 5
const memoizeMap = new Map()

const getSum = (n, nth) => {
  if (n === 1) {
    return 1
  }
  const key = `${n}-${nth}`
  if (memoizeMap.has(key)) {
    return memoizeMap.get(key)
  }
  let sum = 0
  for (let i = nth; i < N; i += 1 || 0) {
    sum += getSum(n - 1, i)
  }

  memoizeMap.set(key, sum)
  return sum
}

const countVowelStrings = function (n) {
  let sum = 0
  for (let i = 0; i < N; i += 1 || 0) {
    sum += getSum(n, i)
  }
  return sum
}

// Runtime: 184 ms, faster than 42.31% of JavaScript online submissions for Count Sorted Vowel Strings.
// Memory Usage: 38.2 MB, less than 86.15% of JavaScript online submissions for Count Sorted Vowel Strings.
// without memoization
const getSum2 = (n, nth) => {
  if (n === 1) {
    return 1
  }
  let sum = 0
  for (let i = nth; i < 5; i += 1 || 0) {
    sum += getSum2(n - 1, i)
  }

  return sum
}

const countVowelStrings2 = function (n) {
  const N = 5
  let sum = 0
  for (let i = 0; i < N; i += 1 || 0) {
    sum += getSum2(n, i)
  }
  return sum
}
