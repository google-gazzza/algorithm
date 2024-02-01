//https://leetcode.com/problems/remove-linked-list-elements/
//Runtime: 0 ms, faster than 100.00% of Java online submissions for Remove Linked List Elements.
//Memory Usage: 42.2 MB, less than 6.35% of Java online submissions for Remove Linked List Elements.
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode removeElements(ListNode head, int val) {
        if (head == null) return head;

        ListNode n = head, tmpNode;

        while (n.next != null) {
            if (n.next.val == val) {
                n.next = n.next.next;
                continue;
            }
            n = n.next;
        }
        if (head.val == val) {
            return head.next;
        }
        return head;
    }
}
