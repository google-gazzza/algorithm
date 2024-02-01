"""
https://leetcode.com/problems/two-sum/
Runtime: 120 ms, faster than 32.41% of Python3 online submissions for Two Sum.
Memory Usage: 15.3 MB, less than 5.11% of Python3 online submissions for Two Sum.
"""


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        
        dic = {}
        
        for idx, num in enumerate(nums):
            key = target-num
            if key in dic.keys():
                return [dic[key], idx]
            
            dic[num] = idx
