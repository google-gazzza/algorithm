// https://leetcode.com/problems/remove-duplicates-from-sorted-list
// Runtime: 3 ms, faster than 7.03% of Java online submissions for Remove Duplicates from Sorted List.
// Memory Usage: 37.6 MB, less than 82.14% of Java online submissions for Remove Duplicates from Sorted List.

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
        LinkedHashSet<Integer> set = new LinkedHashSet<Integer>();

        while (head != null) {
            set.add(head.val);
            head = head.next;
        }
        if (set.size() == 0) {
            return head;
        }

        Object[] _array = set.toArray();
        ListNode tmp2 = new ListNode((int)_array[0]);
        ListNode tmp3 = tmp2;

        for (int i = 1; i < set.size() ; i++) {
            tmp2.next = new ListNode((int)_array[i]);
            tmp2 = tmp2.next;
        }

        return tmp3;
    }
}

