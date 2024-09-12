// https://leetcode.com/problems/add-two-numbers/submissions/
// Runtime: 100 ms, faster than 97.54% of JavaScript online submissions for Add Two Numbers.
// Memory Usage: 38.6 MB, less than 34.72% of JavaScript online submissions for Add Two Numbers.
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
var addTwoNumbers = function(l1, l2) {
    let result = undefined;
    let curr = result;
    let carry = 0;
    
    while (l1 || l2) {
        const l1_val = l1 ? l1.val :0;
        const l2_val = l2 ? l2.val :0;

        let sum = l1_val + l2_val + carry;
        carry = sum >= 10 ? 1 :0;
        sum %= 10;
        if (!result) {
            result = new ListNode(sum, null);
            curr = result; 
        } else {
            let v = new ListNode(sum, null);
            curr.next = v;
            curr = curr.next;
        }
        l1 && (l1 = l1.next);
        l2 && (l2 = l2.next);
    }
    if (carry) {
        let v = new ListNode(carry, null);
        if (!result)
            result = v
        else
            curr.next = v;
    }
    return result;
};