"""
https://leetcode.com/problems/climbing-stairs/
Runtime: 32 ms, faster than 62.90% of Python3 online submissions for Climbing Stairs.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Climbing Stairs.
"""

class Solution:
    def climbStairs(self, n: int) -> int:

        max2 = n//2
        sumofstep = 0

        for step2 in range(max2 + 1):
            step1 = n - (2 * step2)
            steptotal = int(self.p(step1 + step2)/(self.p(step1)*self.p(step2)))
            sumofstep += steptotal

        return sumofstep

    def p(self, n):
        val = 1
        for i in range(n):
            val *= (i+1)
        return val
