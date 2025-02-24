# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def gameResult(self, head: Optional[ListNode]) -> str:
        evenPoint = 0
        oddPoint = 0

        while (head):
            even = head.val
            odd = head.next.val

            if (even > odd):
                evenPoint += 1
            elif (even < odd):
                oddPoint += 1

            head = head.next.next

        if (evenPoint == oddPoint):
            return "Tie"

        return "Even" if evenPoint > oddPoint else "Odd"
