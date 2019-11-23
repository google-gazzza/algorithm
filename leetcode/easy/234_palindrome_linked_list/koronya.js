// https://leetcode.com/problems/palindrome-linked-list/submissions/
// Runtime: 60 ms, faster than 83.39% of JavaScript online submissions for Palindrome Linked List.
// Memory Usage: 40.2 MB, less than 40.00% of JavaScript online submissions for Palindrome Linked List.
const isPalindrome = head => {
  if (!head) {
    return true
  }
  const valArr = []
  while (head.next) {
    valArr.push(head.val)
    head = head.next
  }
  valArr.push(head.val)

  const lastIndex = valArr.length - 1
  return valArr.every((item, index) => item === valArr[lastIndex - index])
}
