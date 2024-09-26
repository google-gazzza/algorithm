// [Medium] 402. Remove K Digits
// 402_remove_k_digits

// https://leetcode.com/problems/remove-k-digits/
// Runtime: 85 ms, faster than 80.77% of TypeScript online submissions for Remove K Digits.
// Memory Usage: 48.6 MB, less than 98.08% of TypeScript online submissions for Remove K Digits.

function removeKdigits(num: string, k: number): string {
  const numLen = num.length
  const stack: string[] = []
  let removeCount = 0
  for (let i: number = 0; i < numLen; i += 1) {
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
