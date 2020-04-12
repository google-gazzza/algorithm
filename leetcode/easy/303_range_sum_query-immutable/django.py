'''
https://leetcode.com/problems/range-sum-query-immutable/
Runtime: 1224 ms, faster than 18.39% of Python3 online submissions for Range Sum Query - Immutable.
Memory Usage: 16.3 MB, less than 100.00% of Python3 online submissions for Range Sum Query - Immutable.
'''

class NumArray:

    def __init__(self, nums: List[int]):
        self.nums = nums
        

    def sumRange(self, i: int, j: int) -> int:
        return sum(self.nums[i:j+1])
        


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(i,j)