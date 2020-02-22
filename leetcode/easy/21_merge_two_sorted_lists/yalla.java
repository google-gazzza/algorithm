// https://leetcode.com/problems/merge-two-sorted-lists/submissions/
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Merge Two Sorted Lists.
// Memory Usage: 38.9 MB, less than 19.53% of Java online submissions for Merge Two Sorted Lists.

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        ListNode result = null;
        if(l1 == null) return l2;
        if(l2 == null) return l1;

        if(l1.val < l2.val){
            result = l1;
            l1.next = mergeTwoLists(l1.next,l2);
        }else{
            result = l2;
            l2.next = mergeTwoLists(l1,l2.next);
        }

        return result;
    }
}