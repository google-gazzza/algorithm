// [Easy] 2160. Minimum Sum of Four Digit Number After Splitting Digits
// 2160_minimum_sum_of_four_digit_number_after_splitting_digits

// https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits
// Runtime: 72 ms, faster than 87.50% of TypeScript online submissions for Minimum Sum of Four Digit Number After Splitting Digits.
// Memory Usage: 46.7 MB, less than 6.25% of TypeScript online submissions for Minimum Sum of Four Digit Number After Splitting Digits.

const getNumbers = (arr: string[]): number[] => {
  const arrLen = arr.length
  const [a, b, c] = arr
  if (arrLen === 1) {
    return [Number(a)]
  }
  if (arrLen === 2) {
    return [a + b, b + a].map((item) => Number(item))
  }
  return [a + b + c, a + c + b, b + a + c, b + c + a, c + a + b, c + b + a].map((item) => Number(item))
}

const getMinimumDiff = (arrA: string[], arrB: string[]): number => {
  const aaa = getNumbers(arrA)
  const bbb = getNumbers(arrB)
  return aaa
    .map((itemA) => bbb.reduce((acc, cur) => (acc > Math.abs(itemA + cur) ? Math.abs(itemA + cur) : acc), Number.MAX_SAFE_INTEGER))
    .sort((a, b) => a - b)[0]
}

function minimumSum(num: number): number {
  let min = Number.MAX_SAFE_INTEGER
  const arr = String(num).split('')
  const dfs = (arrA: string[], arrB: string[], count: number) => {
    if (count === 4) {
      if (arrA.length === 0 || arrB.length === 0) {
        return
      }
      min = Math.min(min, getMinimumDiff(arrA, arrB))
    } else {
      const item = arr[count]
      count += 1
      dfs([...arrA, item], [...arrB], count)
      dfs([...arrA], [...arrB, item], count)
    }
  }
  const item = arr[0]
  dfs([item], [], 1)
  dfs([], [item], 1)

  return min
}
