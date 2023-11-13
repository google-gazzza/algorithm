/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
/**
 https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/
 runtime:4ms
 memory:62.69MB
 */
class Solution {
    public int pairSum(ListNode head) {
        int sum = 0;
        int[] intArr = new int[(int)Math.pow(10,5)];
        int i = 0;
        ListNode current = head;
        while(current != null){
            intArr[i++] = current.val;
            current = current.next;
        }
        for(int j=0;j<=(i/2)-1;j++){
            sum = Math.max(sum,intArr[j] + intArr[i-j-1]);
        }

        return sum;
    }
}