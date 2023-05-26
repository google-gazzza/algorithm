// [Easy] 2231. Largest Number After Digit Swaps by Parity
// 2231_largest_number_after_digit_swaps_by_parity

// https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity
// Runtime: 74 ms, faster than 80.95% of TypeScript online submissions for Largest Number After Digit Swaps by Parity.
// Memory Usage: 45.5 MB, less than 23.81% of TypeScript online submissions for Largest Number After Digit Swaps by Parity.

const descSort = (a: number, b: number) => b - a

function largestInteger(num: number): number {
  const oddArr: number[] = []
  const evenArr: number[] = []
  const oddIndexArr: number[] = []
  const evenIndexArr: number[] = []
  const strArr = String(num).split('')
  const numLen = strArr.length
  for (let i: number = 0; i < numLen; i += 1) {
    const number = Number(strArr[i])
    if (number % 2 === 0) {
      oddArr.push(number)
      oddIndexArr.push(i)
    } else {
      evenArr.push(number)
      evenIndexArr.push(i)
    }
  }

  const resultArr = Array.from({ length: numLen }).map((_) => 0)
  oddArr.sort(descSort)
  evenArr.sort(descSort)
  oddArr.forEach((num, index) => {
    resultArr[oddIndexArr[index]] = num
  })
  evenArr.forEach((num, index) => {
    resultArr[evenIndexArr[index]] = num
  })

  return Number(resultArr.reduce((acc, cur) => acc + String(cur), ''))
}
