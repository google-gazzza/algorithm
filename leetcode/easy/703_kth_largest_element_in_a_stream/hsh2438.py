"""
https://leetcode.com/problems/kth-largest-element-in-a-stream/
Runtime: 136 ms, faster than 37.37% of Python3 online submissions for Kth Largest Element in a Stream.
Memory Usage: 17.9 MB, less than 8.70% of Python3 online submissions for Kth Largest Element in a Stream.
"""


import bisect


class KthLargest:

    def __init__(self, k: int, nums: List[int]):
        self.k = k
        self.nums = nums
        self.nums.sort()

    def add(self, val: int) -> int:
        bisect.insort(self.nums, val)
        return self.nums[-self.k]


# Your KthLargest object will be instantiated and called as such:
# obj = KthLargest(k, nums)
# param_1 = obj.add(val)
