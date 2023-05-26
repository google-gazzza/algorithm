"""
561-array-partition-i
leetcode/easy/561. Array Partition I
Difficulty: easy
URL: https://leetcode.com/problems/array-partition-i/
"""


from typing import List


class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        nums.sort()
        return sum(map(lambda x: min(x), zip(nums[::2], nums[1::2])))


"""
best  https://leetcode.com/problems/array-partition-i/discuss/102161/Python-1-line-(sorting-is-accepted)
"""


class Solution(object):

    def arrayPairSum(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        return sum(sorted(nums)[::2])


def test():
    nums = [1, 4, 3, 2]
    output = 4
    assert Solution().arrayPairSum(nums) == output

    nums = [6, 2, 6, 5, 1, 2]
    output = 9
    assert Solution().arrayPairSum(nums) == output
