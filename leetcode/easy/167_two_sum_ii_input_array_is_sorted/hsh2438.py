"""
https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
Runtime: 3924 ms, faster than 5.01% of Python3 online submissions for Two Sum II - Input array is sorted.
Memory Usage: 14.4 MB, less than 5.80% of Python3 online submissions for Two Sum II - Input array is sorted.
"""


class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        
        for idx, num in enumerate(numbers):
            if (target - num) in numbers[idx+1:]:
                return [idx+1, numbers[idx+1:].index(target-num) + idx + 2]
