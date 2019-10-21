"""
https://leetcode.com/problems/remove-nth-node-from-end-of-list/

Runtime: 32 ms, faster than 97.15% of Python3 online submissions for Remove Nth Node From End of List.
Memory Usage: 13.8 MB, less than 6.06% of Python3 online submissions for Remove Nth Node From End of List.
"""
def removeNthFromEnd(head, n):
    head_list = []
    node = head
    while node != None:
        head_list.append(node)
        node = node.next
    if len(head_list) == 1:
        return None
    if n == len(head_list):
        head = head_list[1]
    elif n == 1:
        head_list[-2].next = None
    elif n > 1:
        head_list[-(n + 1)].next = head_list[-(n - 1)]

    return head