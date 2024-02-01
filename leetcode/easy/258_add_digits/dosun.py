"""https://leetcode.com/problems/add-digits/

Runtime: 32 ms, faster than 72.26% of Python3 online submissions for Add Digits.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Add Digits.
"""
class Solution:
    def addDigits(self, num: int) -> int:
        if num < 10: return num
        return self.addDigits(sum(map(int, (list(str(num))))))        
