"""
https://leetcode.com/problems/happy-number/
Runtime: 32 ms, faster than 66.18% of Python3 online submissions for Happy Number.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Happy Number.
"""

class Solution:
    def __init__(self):
        self.numbers = []

    def isHappy(self, n: int) -> bool:

        words = list(str(n))
        sumVal = 0

        for word in words:
            sumVal += int(word) ** 2

        if sumVal == 1:
            return True

        elif sumVal not in self.numbers:
            self.numbers.append(sumVal)
            return self.isHappy(sumVal)

        elif sumVal in self.numbers:
            return False

