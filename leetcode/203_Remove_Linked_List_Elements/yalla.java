// Runtime: 1 ms, faster than 98.54% of Java online submissions for Remove Linked List Elements.
// Memory Usage: 40.1 MB, less than 100.00% of Java online submissions for Remove Linked List Elements.
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
    ListNode ret = head;
    if(head == null) return null;
    ListNode pointer = head;

    while(pointer.next != null){
      if(pointer.next.val == val){
        pointer.next = pointer.next.next;
      }else{
        pointer = pointer.next;
      }
    }

    //마지막값 처리
    if(ret.val == val){
      ret = ret.next;
    }else{
      ret = head;
    }

    return ret;
  }
}