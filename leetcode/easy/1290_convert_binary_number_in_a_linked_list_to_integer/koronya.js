// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/submissions/
// Runtime: 44 ms, faster than 98.80% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.
// Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.
const getDecimalValue = head => {
  let returnValue = 0
  let current = head
  while (current) {
    returnValue = returnValue << 1 | current.val
    current = current.next
  }
  return returnValue
}

// 처음엔 이렇게 풀었지만, 단순히 parseInt()를 쓰는게 아닌 다른 방법으로 풀어보라는게 의도일 것 같아서 다시 위 풀이로 품
// Runtime: 48 ms, faster than 95.47% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.
// Memory Usage: 33.9 MB, less than 100.00% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.
const getDecimalValue2 = head => {
  let current = head
  let str = ''
  while (current) {
    str += current.val
    current = current.next
  }
  return parseInt(str, 2)
}
