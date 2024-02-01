//https://leetcode.com/problems/palindrome-linked-list
//Runtime: 3 ms, faster than 27.27% of Java online submissions for Palindrome Linked List.
//Memory Usage: 44.5 MB, less than 6.10% of Java online submissions for Palindrome Linked List.
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public boolean isPalindrome(ListNode head) {
        if (head == null) return true;

        List _list = new ArrayList<Integer>();
        while(head.next != null) {
            _list.add(head.val);
            head = head.next;
        }
        _list.add(head.val);
        for (int i = 0; i < _list.size()/2 ; i++) {
            if(!_list.get(i).equals(_list.get(_list.size() - (i+1) ))) return false;
        }

        return true;
    }
}