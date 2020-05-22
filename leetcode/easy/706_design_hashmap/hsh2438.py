"""
https://leetcode.com/problems/design-hashmap/
Runtime: 192 ms, faster than 91.65% of Python3 online submissions for Design HashMap.
Memory Usage: 15.5 MB, less than 100.00% of Python3 online submissions for Design HashMap.
"""


class MyHashMap:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.hash_map = {}
        

    def put(self, key: int, value: int) -> None:
        """
        value will always be non-negative.
        """
        self.hash_map[key] = value
        

    def get(self, key: int) -> int:
        """
        Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
        """
        if key in self.hash_map.keys():
            return self.hash_map[key]
        else:
            return -1

    def remove(self, key: int) -> None:
        """
        Removes the mapping of the specified value key if this map contains a mapping for the key
        """
        if key in self.hash_map.keys():
            del self.hash_map[key]
        


# Your MyHashMap object will be instantiated and called as such:
# obj = MyHashMap()
# obj.put(key,value)
# param_2 = obj.get(key)
# obj.remove(key)
