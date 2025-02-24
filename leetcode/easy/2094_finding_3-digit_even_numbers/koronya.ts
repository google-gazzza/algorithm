// [Easy] 2094. Finding 3-Digit Even Numbers
// 2094_finding_3-digit_even_numbers

// https://leetcode.com/problems/finding-3-digit-even-numbers
// Runtime: 2784 ms, faster than 7.41% of TypeScript online submissions for Finding 3-Digit Even Numbers.
// Memory Usage: 53.1 MB, less than 14.81% of TypeScript online submissions for Finding 3-Digit Even Numbers.

const getValidEvenArr = (arr: number[]): number[] => {
  const [first, second, third] = arr.map((item) => String(item))
  const result = [
    first + second + third,
    first + third + second,
    second + third + first,
    second + first + third,
    third + first + second,
    third + second + first,
  ]

  return result.filter((item) => item[0] !== '0' && Number(item[2]) % 2 !== 1).map((item) => Number(item))
}

function findEvenNumbers(digits: number[]): number[] {
  const resultSet = new Set<number>()
  const digitsLen: number = digits.length
  const dfs = (arr: number[], start: number) => {
    const arrLen = arr.length
    if (arrLen === 3) {
      getValidEvenArr(arr).forEach((item) => resultSet.add(item))
    } else if (arrLen < 3) {
      for (let i: number = start + 1; i < digitsLen; i += 1) {
        dfs([...arr, digits[i]], i)
      }
    }
  }
  for (let i: number = 0; i < digitsLen; i += 1) {
    dfs([digits[i]], i)
  }

  return [...resultSet].sort((a, b) => a - b)
}
