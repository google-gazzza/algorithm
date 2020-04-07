'''
https://leetcode.com/problems/sum-of-two-integers/
Runtime: 24 ms, faster than 84.85% of Python3 online submissions for Sum of Two Integers.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Sum of Two Integers.
'''

class Solution:
    def getSum(self, a: int, b: int) -> int:
        return sum({a, b})