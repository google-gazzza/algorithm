"""
https://leetcode.com/problems/count-and-say/
Runtime: 32 ms, faster than 92.29% of Python3 online submissions for Count and Say.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Count and Say.
"""

class Solution:
    def countAndSay(self, n: int) -> str:

        prvStr = "1"

        if n == 1:
            return prvStr

        for i in range(n - 1):
            temp = []
            current = None
            count = 0

            for j in range(len(prvStr)):
                if current == None:
                    current = prvStr[j]
                    count += 1

                elif current != prvStr[j]:
                    temp.append(str(count))
                    temp.append(str(current))
                    current = prvStr[j]
                    count = 1

                elif current == prvStr[j]:
                    count += 1

            temp.append(str(count))
            temp.append(str(current))

            prvStr = ''.join(temp)

        return prvStr
