"""
https://leetcode.com/problems/powx-n
Runtime: 32 ms, faster than 28.73% of Python3 online submissions for Pow(x, n).
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Pow(x, n).
"""
class Solution:
    def myPow(self, x: float, n: int) -> float:
        return x ** n

# Solution 2
"""
Runtime: 24 ms, faster than 87.18% of Python3 online submissions for Pow(x, n).
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Pow(x, n).
"""
class Solution:
    myPow = pow