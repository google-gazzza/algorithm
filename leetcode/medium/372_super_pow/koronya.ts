// [Medium] 372. Super Pow
// 372_super_pow

// https://leetcode.com/problems/super-pow
// Runtime: 88 ms, faster than 100.00% of TypeScript online submissions for Super Pow.
// Memory Usage: 44.9 MB, less than 100.00% of TypeScript online submissions for Super Pow.

const MOD: number = 1337

function superPow(a: number, b: number[]): number {
  if (a === 1) {
    return 1
  }
  const numberOfB: bigint = BigInt(b.reduce((acc, cur) => acc + String(cur), ''))
  const binaryArr: string[] = numberOfB.toString(2).split('')
  const limitLen: number = binaryArr.length
  let target: number = a % MOD
  const arr: number[] = [target]
  for (let i: number = 1; i < limitLen; i += 1) {
    const item: number = arr[i - 1]
    arr[i] = (item * item) % MOD
  }
  arr.reverse()
  const multiply: number = binaryArr.reduce((acc, cur, index) => (cur === '1' ? (acc * arr[index]) % MOD : acc), 1)
  return multiply % MOD
}

// superPow(2, [3]) //?
// superPow(2, [1, 0]) //?
// superPow(1, [4, 3, 3, 8, 5, 2]) //?
// superPow(2147483647, [2, 0, 0]) //?
