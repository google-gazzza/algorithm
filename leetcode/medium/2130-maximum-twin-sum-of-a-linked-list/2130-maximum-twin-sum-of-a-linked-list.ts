/*
2130-maximum-twin-sum-of-a-linked-list
leetcode/easy/2130. Maximum Twin Sum of a Linked List
Difficulty: medium
URL: https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/

NOTE: Description

NOTE: Constraints
  - The number of nodes in the list is an even integer in the range [2, 105].
  - 1 <= Node.val <= 105

NOTE: Explanation
*/


class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

function pairSum(head: ListNode | null): number {
  const array: number[] = [];

  while (head) {
    array.push(head.val);
    head = head.next;
  }

  let max = 0;

  while (array.length) {
    max = Math.max(max, array.shift() + array.pop());
  }

  return max;
};

let head = [5, 4, 2, 1];
console.log(pairSum(head));
// Output: 6

head = [4, 2, 2, 3];
console.log(pairSum(head));
// Output: 7

