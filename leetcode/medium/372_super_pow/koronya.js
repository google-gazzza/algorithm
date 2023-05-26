// [Medium] 372. Super Pow
// 372_super_pow

// https://leetcode.com/problems/super-pow
// Runtime: 92 ms, faster than 64.29% of JavaScript online submissions for Super Pow.
// Memory Usage: 45 MB, less than 28.57% of JavaScript online submissions for Super Pow.

const MOD = 1337
/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
const superPow = function (a, b) {
  if (a === 1) {
    return 1
  }
  const numberOfB = BigInt(b.reduce((acc, cur) => acc + String(cur), ''))
  const binaryArr = numberOfB.toString(2).split('')
  const limitLen = binaryArr.length
  let target = a % MOD
  const arr = [target]
  for (let i = 1; i < limitLen; i += 1 || 0) {
    const item = arr[i - 1]
    arr[i] = (item * item) % MOD
  }
  arr.reverse()
  const multiply = binaryArr.reduce((acc, cur, index) => (cur === '1' ? (acc * arr[index]) % MOD : acc), 1)
  return multiply % MOD
}

// superPow(2, [3]) //?
// superPow(2, [1, 0]) //?
// superPow(1, [4, 3, 3, 8, 5, 2]) //?
// superPow(2147483647, [2, 0, 0]) //?
