"""
https://leetcode.com/problems/design-hashset/
Runtime: 156 ms, faster than 87.86% of Python3 online submissions for Design HashSet.
Memory Usage: 17.5 MB, less than 46.15% of Python3 online submissions for Design HashSet.
"""


class MyHashSet:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.hash_set = set()
        
    def add(self, key: int) -> None:
        self.hash_set.add(key)

    def remove(self, key: int) -> None:
        if self.contains(key):
            self.hash_set.remove(key)
        

    def contains(self, key: int) -> bool:
        """
        Returns true if this set contains the specified element
        """
        return key in self.hash_set
        


# Your MyHashSet object will be instantiated and called as such:
# obj = MyHashSet()
# obj.add(key)
# obj.remove(key)
# param_3 = obj.contains(key)
