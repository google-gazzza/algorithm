"""
https://leetcode.com/problems/range-sum-query-immutable/

Runtime: 76 ms, faster than 89.19% of Python3 online submissions for Range Sum Query - Immutable.
Memory Usage: 16.5 MB, less than 90.00% of Python3 online submissions for Range Sum Query - Immutable.
"""
class NumArray(object):
    def __init__(self, nums):
        nums_size = len(nums)
        self.array = [0] * (nums_size + 1)
        for i in range(nums_size):
            self.array[i+1] = self.array[i] + nums[i]

    def sumRange(self, i, j):
        return self.array[j+1] - self.array[i]

# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(i,j)
