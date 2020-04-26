//https://leetcode.com/problems/remove-duplicates-from-sorted-list/
//Runtime: 0 ms, faster than 100.00% of Java online submissions for Remove Duplicates from Sorted List.
//Memory Usage: 38.6 MB, less than 7.14% of Java online submissions for Remove Duplicates from Sorted List.

/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        if(head == null) return head;
        ListNode current = head;

        while(current.next != null){
            if(current.val == current.next.val){
                current.next =current.next.next;
            }else{
                current = current.next;
            }
        }
        return head;
    }
}