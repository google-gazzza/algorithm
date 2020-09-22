// [Medium] 1545. Find Kth Bit in Nth Binary String
// 1545_find_kth_bit_in_nth_binary_string

// https://leetcode.com/problems/find-kth-bit-in-nth-binary-string
// Runtime: 1216 ms, faster than 28.51% of JavaScript online submissions for Find Kth Bit in Nth Binary String.
// Memory Usage: 67 MB, less than 72.37% of JavaScript online submissions for Find Kth Bit in Nth Binary String.

const SMap = new Map()
SMap.set(1, '0')

const getReverseInvertValue = str => {
  return str
    .split('')
    .map(item => item === '1' ? '0' : '1')
    .reverse()
    .reduce((a, b) => a + b, '')
}

const getSn = n => {
  if (SMap.has(n) === true) {
    return SMap.get(n)
  }
  const prevSn = getSn(n - 1)
  const reverseInvertValue = getReverseInvertValue(prevSn)

  return prevSn + '1' + reverseInvertValue
}

const findKthBit = (n, k) => getSn(n)[k - 1]
