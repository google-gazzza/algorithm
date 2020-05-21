// https://leetcode.com/problems/complement-of-base-10-integer
// Runtime: 48 ms, faster than 92.88% of JavaScript online submissions for Complement of Base 10 Integer.
// Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Complement of Base 10 Integer.
const bitwiseComplement = N => {
  const complementArr = [...N.toString(2)].map(item => item === '0' ? '1' : '0')
  let flag = 1
  return complementArr.reduceRight((acc, cur) => {
    const sum = acc + cur * flag
    flag *= 2
    return sum
  }, 0)
}
