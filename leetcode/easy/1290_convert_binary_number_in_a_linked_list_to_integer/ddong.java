// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Convert Binary Number in a Linked List to Integer.
// Memory Usage: 34.2 MB, less than 100.00% of Java online submissions for Convert Binary Number in a Linked List to Integer.
/**
 * Definition for singly-linked list. public class ListNode { int val;
 * ListNodeext; ListNode(int x) { val = x; } }
 */
class Solution {
    public int getDecimalValue(ListNode head) {

        StringBuilder stringBuilder = new StringBuilder();

        while (head != null) {

            stringBuilder.append(head.val);
            head = head.next;
        }

        return Integer.parseInt(stringBuilder.toString(), 2);
    }
}