// https://leetcode.com/problems/number-complement
// Runtime: 48 ms, faster than 94.02% of JavaScript online submissions for Number Complement.
// Memory Usage: 34 MB, less than 100.00% of JavaScript online submissions for Number Complement.
const findComplement = num => {
  const complementStr = [...num.toString(2)].reduce((acc, cur) => cur === '1' ? acc + '0' : acc + '1', '')
  const complementStrLen = complementStr.length
  return [...complementStr].reduceRight((acc, cur, index) => cur === '1' ? acc + 2 ** (complementStrLen - index - 1) : acc, 0)
}
