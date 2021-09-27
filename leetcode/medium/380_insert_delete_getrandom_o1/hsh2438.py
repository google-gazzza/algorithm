"""
https://leetcode.com/problems/insert-delete-getrandom-o1/
Runtime: 428 ms, faster than 11.96% of Python3 online submissions for Insert Delete GetRandom O(1).
Memory Usage: 16.8 MB, less than 75.00% of Python3 online submissions for Insert Delete GetRandom O(1).
"""


import random


class RandomizedSet:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.randomized_set = []
        
    def insert(self, val: int) -> bool:
        """
        Inserts a value to the set. Returns true if the set did not already contain the specified element.
        """
        if val in self.randomized_set:
            return False
        else:
            self.randomized_set.append(val)
            return True
        
    def remove(self, val: int) -> bool:
        """
        Removes a value from the set. Returns true if the set contained the specified element.
        """
        if val in self.randomized_set:
            self.randomized_set.remove(val)
            return True
        else:
            return False

    def getRandom(self) -> int:
        """
        Get a random element from the set.
        """
        return random.choice(self.randomized_set)
        


# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()
