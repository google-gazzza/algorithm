/**
   https://leetcode.com/problems/merge-two-sorted-lists/submissions/1259091744/
 * Runtime: 0ms
 * Memory: 42.71MB
 * */
public class Myeonsikbeom {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode result = new ListNode();
        ListNode current = result;
        while(list1 != null && list2 != null){ // 둘중 하나라도 비어있으면 종료

            if(list1.val > list2.val){
                current.next = list2;//현재노드의 다음을 list2로
                list2 = list2.next; //list2 node 이동.
            }else{
                current.next = list1;//현재노드의 다음을 list1로
                list1 = list1.next; //list1 node 이동.
            }
            current = current.next; // 현재 노드의 위치를 다음으로 이동.

        }
        current.next = list1 != null ? list1 : list2; //둘중에 남은 노드를 맨뒤에 몰아서 넣어준다.
        return result.next;
    }
}
