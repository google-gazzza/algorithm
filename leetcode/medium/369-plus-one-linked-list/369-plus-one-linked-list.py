# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def plusOne(self, head: ListNode) -> ListNode:
        arr = []

        cur = head

        while cur:
            arr.append(cur)
            cur = cur.next

        arr[-1].val += 1
        carry = 0

        for i in range(len(arr) - 1, -1, -1):
            arr[i].val += carry
            carry = arr[i].val // 10
            arr[i].val %= 10

        if carry:
            head = ListNode(carry)
            head.next = arr[0]

        return head
