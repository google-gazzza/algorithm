// [Medium] 402. Remove K Digits
// 402_remove_k_digits

// https://leetcode.com/problems/remove-k-digits/
// Runtime: 89 ms, faster than 65.11% of JavaScript online submissions for Remove K Digits.
// Memory Usage: 48 MB, less than 58.72% of JavaScript online submissions for Remove K Digits.

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
const removeKdigits = function (num, k) {
  const numLen = num.length
  const stack = []
  let removeCount = 0
  for (let i = 0; i < numLen; i += 1 || 0) {
    const n = num[i]
    while (stack.length && n < stack[stack.length - 1] && removeCount < k) {
      stack.pop()
      removeCount += 1
    }
    stack.push(n)
  }
  while (removeCount < k) {
    stack.pop()
    removeCount += 1
  }
  while (stack.length && stack[0] === '0') {
    stack.shift()
  }

  return stack.join('') || '0'
}

// TLE...
const removeKdigits2 = function (num, k) {
  if (num.length <= k) {
    return '0'
  }
  while (k > 0) {
    const numLen = num.length
    let i = 0
    while (i + 1 < numLen && num[i] <= num[i + 1]) {
      i += 1
    }
    num = num.substring(0, i) + num.substring(i + 1)
    k -= 1
  }

  let zeroIndex = 0
  while (num[zeroIndex] === '0') {
    zeroIndex += 1
  }

  return num.substring(zeroIndex) || '0'
}

removeKdigits('1432219', 3)
// removeKdigits('10200', 1)
// removeKdigits('10', 2)
// removeKdigits('10', 1)
