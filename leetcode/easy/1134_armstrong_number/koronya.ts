// [Easy] 1134. Armstrong Number
// 1134_armstrong_number

// https://leetcode.com/problems/armstrong-number
// Runtime: 76 ms, faster than 100.00% of TypeScript online submissions for Armstrong Number.
// Memory Usage: 40.5 MB, less than 100.00% of TypeScript online submissions for Armstrong Number.

function isArmstrong(n: number): boolean {
  const nStr = n.toString()
  const nLen = nStr.length
  return n === nStr.split('').reduce((acc, cur) => acc + Number(cur) ** nLen, 0)
}

isArmstrong(153) //?
isArmstrong(123) //?
