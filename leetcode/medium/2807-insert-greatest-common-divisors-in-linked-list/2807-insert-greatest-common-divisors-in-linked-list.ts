// leetcode/medium/2807. Insert Greatest Common Divisors in Linked List
// 2807-insert-greatest-common-divisors-in-linked-list
// URL: https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/description/

// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

function gcd(a, b) {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
}

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }

  let current = head;
  let next = head.next;

  while (next !== null) {
    const greatestCommonDivisor = gcd(current.val, next.val);

    current.next = new ListNode(greatestCommonDivisor, next);
    current = next;
    next = next.next;
  }

  return head;
}
