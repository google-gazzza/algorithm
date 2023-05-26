// https://leetcode.com/problems/counting-bits
// Runtime: 92 ms, faster than 85.01% of JavaScript online submissions for Counting Bits.
// Memory Usage: 46.1 MB, less than 100.00% of JavaScript online submissions for Counting Bits.
// bit 연산 이용한 방법
const countBits = num => {
  const resultArr = []
  const countMap = new Map()
  countMap.set(0, 0)
  const getCount = num => {
    if (countMap.has(num)) {
      return countMap.get(num)
    }
    const result = getCount(num >> 1) + (num & 1)
    countMap.set(num, result)
    return result
  }
  for (let i = 0; i <= num; i = i + 1 | 0) {
    resultArr.push(getCount(i))
  }
  return resultArr
}

// Runtime: 136 ms, faster than 25.11% of JavaScript online submissions for Counting Bits.
// Memory Usage: 44.8 MB, less than 100.00% of JavaScript online submissions for Counting Bits.
// 처음의 풀이
const getOneCount = num => [...num.toString(2)].reduce((acc, cur) => cur === '1' ? acc + 1 : acc, 0)
const countBits2 = num => {
  const resultArr = []
  for (let i = 0; i <= num; i = i + 1 | 0) {
    resultArr.push(getOneCount(i))
  }
  return resultArr
}
