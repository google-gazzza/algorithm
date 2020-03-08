"""https://leetcode.com/problems/jump-game/

Runtime: 88 ms, faster than 82.63% of Python3 online submissions for Jump Game.
Memory Usage: 14.8 MB, less than 7.14% of Python3 online submissions for Jump Game.
"""
class Solution:
    def canJump(self, nums: List[int]) -> bool:
        result = 0
        for k, v in enumerate(nums):
            if k > result: return False
            result = max(result, k + v)
        return True
