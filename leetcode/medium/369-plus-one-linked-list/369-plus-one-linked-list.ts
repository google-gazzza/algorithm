// 369-plus-one-linked-list
// URL: https://leetcode.com/problems/plus-one-linked-list/description/?envType=study-plan-v2&envId=premium-algo-100

// Definition for singly-linked list.
class ListNode {
    val: number;
    next: ListNode | null;
  
    constructor(val?: number, next?: ListNode | null) {
      this.val = (val === undefined ? 0 : val);
      this.next = (next === undefined ? null : next);
    }
  }
  
  function plusOne(head: ListNode | null): ListNode | null {
    let arr = [];
    let cur = head;
  
    while (cur) {
      arr.push(cur);
      cur = cur.next;
    }
  
    let carry = 0;
    arr[arr.length - 1].val += 1;
  
    for (let i = arr.length - 1; i >= 0; i--) {
      const val = carry + arr[i].val;
      arr[i].val = val % 10;
  
      carry = Math.floor(val / 10);
    }
  
    if (carry > 0) {
      head = new ListNode(carry, head);
    }
  
    return head;
  };
  