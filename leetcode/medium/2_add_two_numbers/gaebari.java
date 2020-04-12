//https://leetcode.com/problems/add-two-numbers
//Runtime: 2 ms, faster than 79.58% of Java online submissions for Add Two Numbers.
//Memory Usage: 41.3 MB, less than 91.22% of Java online submissions for Add Two Numbers.
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode one = l1;
        ListNode two = l2;
        ListNode sentinel = new ListNode(0);
        ListNode tmp = sentinel;
        int sum = 0;
        while ( one != null || two != null) {
            sum /= 10;
            if ( one != null) {
                sum += one.val;
                one = one.next;
            }

            if ( two != null) {
                sum += two.val;
                two = two.next;
            }
            tmp.next = new ListNode(sum % 10);
            tmp = tmp.next;
        }
        if ( sum / 10 == 1) {
            tmp.next = new ListNode(1);
        }
        return sentinel.next;
    }
}