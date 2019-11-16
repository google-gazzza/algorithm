// https://leetcode.com/problems/palindrome-linked-list/
// Runtime: 60 ms, faster than 83.39% of JavaScript online submissions for Palindrome Linked List.
// Memory Usage: 45.6 MB, less than 20.00% of JavaScript online submissions for Palindrome Linked List.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

const linkedListToArray = (link, arr = []) => {
  if (link && link.val !== null) {
    arr.push(link.val);
  }
  return link && link.next ? linkedListToArray(link.next, arr) : arr;
};

const isPalindrome = (head) => {
  const arr = linkedListToArray(head);
  while (arr.length > 1) {
    if (arr.shift() !== arr.pop()) {
      return false;
    }
  }
  return true;
};

const node = {
  val: 1,
  next: {
    val: 0,
    next: {
      val: 0,
      next: null,
    },
  },
};
const node2 = {
  val: null,
  next: null
};
console.log(isPalindrome(node2));
// ListNode {
//   val: 1,
//   next: ListNode { val: 0, next: ListNode { val: 0, next: null } } }
