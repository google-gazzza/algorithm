//https://leetcode.com/problems/remove-nth-node-from-end-of-list
//Runtime: 0 ms, faster than 100.00% of Java online submissions for Remove Nth Node From End of List.
//Memory Usage: 37.8 MB, less than 6.37% of Java online submissions for Remove Nth Node From End of List.
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode start = head;
        int size = 0, sSize = 0;
        if( head.next == null && n >0) {
            return null;
        }
        while(head != null) {
            head = head.next;
            size++;
        }

        head = start;
        if (size <= n ) {
            return head.next;
        }
        while(head != null) {
            sSize++;
            if(sSize == size - n) {
                head.next = head.next.next;
            }
            head = head.next;
        }

        return start;

    }
}