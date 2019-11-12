"""https://leetcode.com/problems/happy-number/

Runtime: 36 ms, faster than 93.53% of Python3 online submissions for Happy Number.
Memory Usage: 13.7 MB, less than 5.26% of Python3 online submissions for Happy Number.
"""
class Solution:
    def isHappy(self, n: int) -> bool:
        nums = set()
        while n != 1:
            if n in nums: return False
            nums.add(n)

            n = sum([int(c) * int(c) for c in str(n)])
        else: return True
