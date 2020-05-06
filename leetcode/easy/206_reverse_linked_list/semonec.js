// https://leetcode.com/problems/reverse-linked-list/submissions/
// Runtime: 56 ms, faster than 80.82% of JavaScript online submissions for Reverse Linked List.
// Memory Usage: 35.3 MB, less than 34.78% of JavaScript online submissions for Reverse Linked List.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) return null;
    if (!head.next) return head;
    
    let reverse = (curr, next) => {
        if (!next) return curr; // it will be new head
        let future = next.next;
        next.next = curr;
        return reverse(next, future);
    }
    const newHead = reverse(head, head.next);
    head.next = null;
    return newHead;
};