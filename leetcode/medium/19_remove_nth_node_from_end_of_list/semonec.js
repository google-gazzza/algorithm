// https://leetcode.com/problems/remove-nth-node-from-end-of-list/submissions/
// Runtime: 48 ms, faster than 97.88% of JavaScript online submissions for Remove Nth Node From End of List.
// Memory Usage: 34 MB, less than 81.82% of JavaScript online submissions for Remove Nth Node From End of List.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let start = {};
    let slow = start, fast = start;
    slow.next = head;
    for (let i = 0; i <= n ; i++) {
        fast = fast.next;
    }
    
    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return start.next;
};