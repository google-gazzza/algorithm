// 3063-linked-list-frequency
// URL: https://leetcode.com/problems/linked-list-frequency/description/


// Definition for singly-linked list.
class ListNode {
    val: number;
    next: ListNode | null;
  
    constructor(val?: number, next?: ListNode | null) {
      this.val = (val === undefined ? 0 : val);
      this.next = (next === undefined ? null : next);
    }
  }
  
  
  function frequenciesOfElements(head: ListNode | null): ListNode | null {
    let frequencies: Map<number, number> = new Map<number, number>();
  
    while (head) {
      if (frequencies.has(head.val)) {
        frequencies.set(head.val, frequencies.get(head.val) + 1);
      } else {
        frequencies.set(head.val, 1);
      }
  
      head = head.next;
    }
  
    const result = new ListNode();
    let resultHead = result;
  
    for (let [key, value] of frequencies) {
      resultHead.next = new ListNode(value);
      resultHead = resultHead.next;
    }
  
    return result.next;
  };
  