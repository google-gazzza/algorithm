"""
https://leetcode.com/problems/design-linked-list/
Runtime: 76 ms, faster than 98.90% of Python3 online submissions for Design Linked List.
Memory Usage: 14 MB, less than 12.50% of Python3 online submissions for Design Linked List.
"""


class MyLinkedList:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.li = []
        

    def get(self, index: int) -> int:
        """
        Get the value of the index-th node in the linked list. If the index is invalid, return -1.
        """
        if index > -1 and index < len(self.li):
            return self.li[index]
        else:
            return -1

        
    def addAtHead(self, val: int) -> None:
        """
        Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
        """
        self.li.insert(0, val)
        

    def addAtTail(self, val: int) -> None:
        """
        Append a node of value val to the last element of the linked list.
        """
        self.li.append(val)
        

    def addAtIndex(self, index: int, val: int) -> None:
        """
        Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
        """
        self.li.insert(index, val)
        

    def deleteAtIndex(self, index: int) -> None:
        """
        Delete the index-th node in the linked list, if the index is valid.
        """
        try:
            del self.li[index]
        except:
            return
        


# Your MyLinkedList object will be instantiated and called as such:
# obj = MyLinkedList()
# param_1 = obj.get(index)
# obj.addAtHead(val)
# obj.addAtTail(val)
# obj.addAtIndex(index,val)
# obj.deleteAtIndex(index)
