// https://leetcode.com/problems/linked-list-cycle/submissions/
// Runtime: 64 ms, faster than 71.12% of JavaScript online submissions for Linked List Cycle.
// Memory Usage: 36.5 MB, less than 87.50% of JavaScript online submissions for Linked List Cycle.
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
var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    while (slow && fast) {
        slow = slow.next;
        fast = fast.next ? fast.next.next : null;
        if (slow && slow === fast)
            return true;
    }
    return false;
};