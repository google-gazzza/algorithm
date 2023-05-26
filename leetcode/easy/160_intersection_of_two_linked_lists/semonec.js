// https://leetcode.com/problems/intersection-of-two-linked-lists/submissions/
// Runtime: 68 ms, faster than 99.54% of JavaScript online submissions for Intersection of Two Linked Lists.
// Memory Usage: 43.2 MB, less than 18.18% of JavaScript online submissions for Intersection of Two Linked Lists.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;
    
    let getLength = (node, index = 0) => {
        if (!node) return index;
        return getLength(node.next, index +1);
    }
    
    let diff = getLength(headA) - getLength(headB);
    
    while (diff !== 0) {
        diff < 0 ? headB = headB.next : headA = headA.next;
        diff < 0 ? diff++: diff--;
    }

    // start race till they meet
    while ( headA && headB ) {
        if (headA === headB)
            return headA;
        headA = headA.next;
        headB = headB.next;
    }
    // if they cannot meet
    return null;
};