"""
https://leetcode.com/problems/maximum-average-subarray-i/
Runtime: 860 ms, faster than 96.41% of Python3 online submissions for Maximum Average Subarray I.
Memory Usage: 17.2 MB, less than 12.50% of Python3 online submissions for Maximum Average Subarray I.
"""


class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        result = previous = sum(nums[:k])/k
        
        for i in range(k, len(nums)):
            previous = previous + nums[i]/k - nums[i-k]/k
            if previous > result:
                result = previous
        
        return result
