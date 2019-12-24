"""
Runtime: 416 ms, faster than 13.80% of Python3 online submissions for Insert Delete GetRandom O(1).
Memory Usage: 17.2 MB, less than 12.50% of Python3 online submissions for Insert Delete GetRandom O(1).
"""

import random


class RandomizedSet:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.randomized_set = set()
        
    def insert(self, val: int) -> bool:
        """
        Inserts a value to the set. Returns true if the set did not already contain the specified element.
        """
        if val in self.randomized_set:
            return False
        else:
            self.randomized_set.add(val)
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
        return random.choice(list(self.randomized_set))
