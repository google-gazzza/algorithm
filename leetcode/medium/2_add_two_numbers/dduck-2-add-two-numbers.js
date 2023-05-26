/*
2-add-two-numbers

# leetcode/medium/2. Add Two Numbers
difficulty: medium
URL: https://leetcode.com/problems/add-two-numbers
tags: linked-list, swap

## Approach

### en
1.define 'head' for remember first node of l1
2.iterate l1 -> l1.next until l1.next null
3.replace l1.value to l1.value + l2.value
4.if l1.next is null and l2.next is not null then swap the link l1.next to l2.next
also don't forget l2.next must be pointing null
(because if don't, l1.next, and l2 next will be pointing same node
5.return 'head'

### kr
1.'head'라는 변수에 l1의 첫번째 노드를 저장합니다.
2.l1.next가 null일때까지 l1 -> l1.next로 이터레이션합니다.
3.l1.value에 l1.value + l2.value 를 저장합니다.
4.만약 l1.next가 null이고 l2.next가 null이 아닐경우 l1.next와 l2.next의 링크를 스왑합니다.
또한 l2.next를 null로 바꾸는걸 잊지마세요.
(왜냐하면 그렇게 안하면, l1.next, l2.next는 같은 노드를 가르키게 됩니다)
5.'head'를 리턴하세요

## Solution
### JavaScript

*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const addTwoNumbers = function (l1, l2) {
  const head = l1;
  let currentNodeL1 = l1;
  let currentNodeL2 = l2;
  
  while (currentNodeL1) {
    const sum = (currentNodeL1.val + (currentNodeL2?.val || 0));
    
    if (sum >= 10) {
      currentNodeL1.val = sum % 10;
      if (currentNodeL1.next) {
        currentNodeL1.next.val += 1;
      } else {
        currentNodeL1.next = new ListNode(1);
      }
    } else {
      currentNodeL1.val = sum;
    }
    
    if (!currentNodeL1.next && currentNodeL2?.next) {
      const temp = currentNodeL1.next;
      currentNodeL1.next = currentNodeL2.next;
      currentNodeL2.next = temp;
    }
    currentNodeL1 = currentNodeL1?.next || null;
    currentNodeL2 = currentNodeL2?.next || null;
  }
  
  return head;
};
