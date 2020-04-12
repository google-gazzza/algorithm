"""
https://leetcode.com/problems/contains-duplicate-ii/
Runtime: 96 ms, faster than 63.17% of Python3 online submissions for Contains Duplicate II.
Memory Usage: 20.8 MB, less than 50.00% of Python3 online submissions for Contains Duplicate II.
"""


class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        
        dic = {}
        
        for idx, num in enumerate(nums):
            if num in dic.keys():
                if idx - dic[num] <= k:
                    return True
                else:
                    dic[num] = idx
            else:
                dic[num] = idx
        
        return False
            
