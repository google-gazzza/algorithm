// https://leetcode.com/problems/intersection-of-two-linked-lists/
// Runtime: 1 ms, faster than 99.24% of Java online submissions for Intersection of Two Linked Lists.
// Memory Usage: 42.7 MB, less than 5.71% of Java online submissions for Intersection of Two Linked Lists.

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        int diff = getLength(headB) - getLength(headA);
        ListNode a = diff > 0 ? headB : headA;
        ListNode b = diff > 0 ? headA : headB;
        for (int i = 0; i < Math.abs(diff); i++) {
            a = a.next;
        }
        
        while (a != null) {
            if (a == b) return a;
            a = a.next;
            b = b.next;
        }
        
        return null;
    }
    
    int getLength(ListNode node) {
        int len = 0;
        while(node != null) {
            node = node.next;
            len++;
        }
        return len;
    }
}