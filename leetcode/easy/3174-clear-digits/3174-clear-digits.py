# 3174-clear-digits
# URL: https://leetcode.com/problems/clear-digits/description/

class Solution:
    def findDigitIndex(self, s: str) -> int:
        for i in range(len(s)):
            if s[i].isdigit():
                return i

        return -1

    def clearDigits(self, s: str) -> str:
        while self.findDigitIndex(s) != -1:
            i = self.findDigitIndex(s)
            s = s[:i-1] + s[i + 1:]

        return s
