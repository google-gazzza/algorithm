# // 3110-score-of-a-string
# // URL: https://leetcode.com/problems/score-of-a-string/description/

class Solution:
    def getAscii(self, c: str) -> int:
        return ord(c)

    def scoreOfString(self, s: str) -> int:
        score = 0
        lastAscii = self.getAscii(s[0])

        for c in s[1:]:
            asciiValue = self.getAscii(c)
            score += abs(asciiValue - lastAscii)
            lastAscii = asciiValue

        return score


print(Solution().scoreOfString("hello"))
# 13
