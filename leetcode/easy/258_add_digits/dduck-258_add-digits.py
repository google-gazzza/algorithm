"""
https://leetcode.com/problems/add-digits/

Runtime: 28 ms, faster than 87.12% of Python3 online submissions for Add Digits.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Add Digits.

Runtime: 24 ms, faster than 96.79% of Python3 online submissions for Add Digits.
Memory Usage: 12.9 MB, less than 100.00% of Python3 online submissions for Add Digits.
"""


class Solution:
    def addDigits(self, num: int) -> int:
        if num < 10:
            return num
        return self.addDigits(sum([int(x) for x in list(str(num))]))


print(Solution().addDigits(38))
