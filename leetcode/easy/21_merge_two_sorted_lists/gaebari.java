// https://leetcode.com/problems/merge-two-sorted-lists
// Runtime: 6 ms, faster than 20.96% of Java online submissions for Merge Two Sorted Lists.
// Memory Usage: 36.1 MB, less than 100.00% of Java online submissions for Merge Two Sorted Lists.
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
        ArrayList<Integer> list = new ArrayList<Integer>();
        while (l1 != null) {
            if (l1.next == null) {
                list.add(l1.val);
                break;
            }
            list.add(l1.val);
            l1 = l1.next;
        }

        while (l2 != null) {
            if (l2.next == null) {
                list.add(l2.val);
                break;
            }
            list.add(l2.val);
            l2 = l2.next;
        }

        Collections.sort(list);

        if ( list.size() == 0 ) {
            return null;
        }

        ListNode start = new ListNode(list.get(0));
        ListNode tmp = start;

        for (int i = 1; i < list.size(); i++) {
            tmp = tmp.next = new ListNode(list.get(i));
        }

        return start;
    }
}