// [JS][6kyu] Roman Numerals Encoder
// roman-numerals-encoder
// https://www.codewars.com/kata/51b62bf6a9c58071c600001b/train/javascript

const numMap = new Map([
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
])

const solution = (number) => {
  let result = ''
  let curNum = number
  for (const [key, value] of numMap) {
    const quotient = Math.floor(curNum / key)
    if (quotient > 0) {
      result += value.repeat(quotient)
      curNum -= quotient * key
    }
  }
  return result
}

// solution(1) === 'I'
// solution(2) === 'II'
// solution(3) === 'III'
// solution(4) === 'IV'
// solution(5) === 'V'
// solution(9) === 'IX'
// solution(10) === 'X'
// solution(11) === 'XI'
// solution(19) === 'XIX'
// solution(22) === 'XXII'
// solution(15) === 'XV'

// solution(1000) === 'M'
// solution(1001) === 'MI'
// solution(1990) === 'MCMXC'
// solution(2007) === 'MMVII'
// solution(2008) === 'MMVIII'
