// 3062-winner-of-the-linked-list-game
// URL: https://leetcode.com/problems/winner-of-the-linked-list-game/description/


class ListNode {
    val: number;
    next: ListNode | null;
  
    constructor(val?: number, next?: ListNode | null) {
      this.val = (val === undefined ? 0 : val);
      this.next = (next === undefined ? null : next);
    }
  }
  
  
  function gameResult(head: ListNode | null): string {
    const stack = [];
    let evenPoint = 0;
    let oddPoint = 0;
  
    while (head) {
      stack.push(head.val);
      head = head.next;
  
      if (stack.length >= 2) {
        const [even, odd] = stack.slice(-2);
        if (even > odd) {
          evenPoint += 1;
        }
        if (odd > even) {
          oddPoint += 1;
        }
  
        stack.pop();
        stack.pop();
      }
    }
  
    if (evenPoint === oddPoint) {
      return 'Tie';
    }
  
    return evenPoint > oddPoint ? 'Even' : 'Odd';
  };
  