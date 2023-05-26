// [Easy] 1056. Confusing Number
// 1056_confusing_number

// https://leetcode.com/problems/confusing-number
// Runtime: 82 ms, faster than 80.00% of TypeScript online submissions for Confusing Number.
// Memory Usage: 43.6 MB, less than 20.00% of TypeScript online submissions for Confusing Number.


const INVALID_ARR = ['2', '3', '4', '5', '7']

type ValidNumber = 0 | 1 | 6 | 8 | 9

type Value = { [k in ValidNumber]: string }

const transformObj: Value = {
  0: '0',
  1: '1',
  6: '9',
  8: '8',
  9: '6',
}

function confusingNumber(n: number): boolean {
  const nArr = String(n).split('')
  if (nArr.some((item) => INVALID_ARR.includes(item) === true)) {
    return false
  }

  return nArr.reduceRight((acc, cur) => acc + transformObj[Number(cur) as ValidNumber], '') !== String(n)
}
