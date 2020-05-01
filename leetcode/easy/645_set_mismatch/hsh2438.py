"""
https://leetcode.com/problems/set-mismatch/
Runtime: 260 ms, faster than 13.48% of Python3 online submissions for Set Mismatch.
Memory Usage: 15.7 MB, less than 11.11% of Python3 online submissions for Set Mismatch.
"""


from collections import Counter

class Solution:
    def findErrorNums(self, nums: List[int]) -> List[int]:
        nums_counter = Counter(nums)
        set_counter = Counter([i for i in range(1, len(nums)+1)])
        
        return list((nums_counter-set_counter).keys()) + list((set_counter-nums_counter).keys())
