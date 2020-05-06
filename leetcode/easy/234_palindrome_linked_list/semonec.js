// https://leetcode.com/problems/palindrome-linked-list/submissions/
// Runtime: 56 ms, faster than 92.39% of JavaScript online submissions for Palindrome Linked List.
// Memory Usage: 41.9 MB, less than 20.00% of JavaScript online submissions for Palindrome Linked List.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let node = head;
    let length = 0;
    while (node) {
        node = node.next;
        length++;
    }
    if (length < 2) return true;
    
    let left = head;
    let right = head;
    
    
    let reverse = (curr, next, until) => {
        if (curr === until) return curr;
        let future = next.next;
        next.next = curr;
        return reverse(next, future, until);
    }

    if (length% 2 === 0) { //even
        for (let i = 1; i < (length/2); i++) {
            left = left.next;
        }
        right = left.next; // right will go to right side
        left = reverse(head, head.next, left);
    } else { // odd
        for (let i = 1; i < Math.floor(length/2); i++) {
            left = left.next;
        }
        right = left.next.next;
        left = reverse(head, head.next, left);
    }
    head.next = null;
    
    while (left && right) {
        if (left.val !== right.val) return false;
        left = left.next;
        right = right.next;
    }
    return true;
    
};