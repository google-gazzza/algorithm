"""
https://leetcode.com/problems/map-sum-pairs/
Runtime: 28 ms, faster than 75.84% of Python3 online submissions for Map Sum Pairs.
Memory Usage: 12.9 MB, less than 100.00% of Python3 online submissions for Map Sum Pairs.
"""


class MapSum:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.data = {}
        

    def insert(self, key: str, val: int) -> None:
        self.data[key] = val

    def sum(self, prefix: str) -> int:
        results = 0
        prefix_len = len(prefix)
        for key in self.data.keys():
            if key[:prefix_len] == prefix:
                results += self.data[key]
        
        return results


# Your MapSum object will be instantiated and called as such:
# obj = MapSum()
# obj.insert(key,val)
# param_2 = obj.sum(prefix)
