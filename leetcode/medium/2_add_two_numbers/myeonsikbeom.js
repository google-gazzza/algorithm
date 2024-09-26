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

/**https://leetcode.com/problems/add-two-numbers/submissions/
Runtime: 191 ms, faster than 30.02% of JavaScript online submissions for Add Two Numbers.
Memory Usage: 47.5 MB, less than 47.56% of JavaScript online submissions for Add Two Numbers.
*/
var addTwoNumbers = function(l1, l2) {
    let resultL = new ListNode();
    const result = resultL;
    let remainder = 0;
    while(true){
        let sum =  ((l1?.val || 0) + (l2?.val || 0)) + remainder;
        resultL.val = (sum % 10);
        remainder = Math.trunc(sum / 10);
        
        if(l1){
            l1 = l1.next;
        }
        if(l2){
            l2 = l2.next;
        }
        if(!(l1 || l2 || remainder)){
            break;
        }
        const nextNode = new ListNode();
        resultL.next = nextNode;
        resultL = nextNode;
        
    }
    return result;
};