// [Medium] 1291. Sequential Digits
// 1291_sequential_digits

// https://leetcode.com/problems/sequential-digits
// Runtime: 92 ms, faster than 100.00% of TypeScript online submissions for Sequential Digits.
// Memory Usage: 39.5 MB, less than 100.00% of TypeScript online submissions for Sequential Digits.

/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
const getNDigitArr = (n: number, low: number, end: number): number[] => {
  const resultArr: number[] = []
  for (let i: number = 1; i < 9; i += 1 || 0) {
    let str: string = ''
    const additionalLength: number = Math.min(i + n - 1, 9)
    for (let j: number = i; j <= additionalLength; j += 1 || 0) {
      str += String(j)
    }
    if (str.length === n) {
      const num: number = Number(str)
      if (num >= low && num <= end) {
        resultArr.push(num)
      }
    }
  }

  return resultArr
}

function sequentialDigits(low: number, high: number): number[] {
  const minDigitsLen: number = low.toString().length
  const maxDigitsLen: number = high.toString().length
  let resultArr: number[] = []
  for (let i: number = minDigitsLen; i <= maxDigitsLen; i += 1 || 0) {
    const nDigitArr: number[] = getNDigitArr(i, low, high)
    const nDigitArrLen: number = nDigitArr.length
    for (let j: number = 0; j < nDigitArrLen; j += 1 || 0) {
      resultArr.push(nDigitArr[j])
    }
  }

  return resultArr
}

sequentialDigits(100, 300) //?
sequentialDigits(1000, 13000) //?
