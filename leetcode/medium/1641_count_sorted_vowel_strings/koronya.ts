// [Medium] 1641. Count Sorted Vowel Strings
// 1641_count_sorted_vowel_strings

// https://leetcode.com/problems/count-sorted-vowel-strings
// Runtime: 76 ms, faster than 93.33% of TypeScript online submissions for Count Sorted Vowel Strings.
// Memory Usage: 38.9 MB, less than 93.33% of TypeScript online submissions for Count Sorted Vowel Strings.
// with memoization! 더 빠르다!
const N: number = 5
const memoizeMap = new Map<string, number>()

const getSum = (n: number, nth: number): number => {
  if (n === 1) {
    return 1
  }
  const key: string = `${n}-${nth}`
  if (memoizeMap.has(key)) {
    return memoizeMap.get(key)
  }
  let sum: number = 0
  for (let i: number = nth; i < N; i += 1) {
    sum += getSum(n - 1, i)
  }

  memoizeMap.set(key, sum)
  return sum
}

function countVowelStrings(n: number): number {
  let sum: number = 0
  for (let i: number = 0; i < N; i += 1) {
    sum += getSum(n, i)
  }
  return sum
}
