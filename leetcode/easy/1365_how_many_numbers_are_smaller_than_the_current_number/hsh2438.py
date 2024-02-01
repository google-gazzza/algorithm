"""
https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
Runtime: 52 ms, faster than 88.00% of Python3 online submissions for How Many Numbers Are Smaller Than the Current Number.
Memory Usage: 14 MB, less than 100.00% of Python3 online submissions for How Many Numbers Are Smaller Than the Current Number.
"""


class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        
        result_dic = {}
        
        for idx, num in enumerate(sorted(nums)):
            if not num in result_dic.keys():
                result_dic[num] = idx
        
        return [result_dic[num] for num in nums]
