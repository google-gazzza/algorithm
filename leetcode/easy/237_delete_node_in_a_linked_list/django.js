/*
 * https://leetcode.com/problems/delete-node-in-a-linked-list/
 * Runtime: 56 ms, faster than 94.78% of JavaScript online submissions for Delete Node in a Linked List.
Memory Usage: 35.8 MB, less than 16.67% of JavaScript online submissions for Delete Node in a Linked List.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};

