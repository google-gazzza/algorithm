"""
https://leetcode.com/problems/count-and-say/
Runtime: 28 ms, faster than 91.60% of Python3 online submissions for Count and Say.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Count and Say.
"""


class Solution:
    def countAndSay(self, n: int) -> str:
        if n == 1:
            return '1'
        else:
            before = self.countAndSay(n-1) + '#'
            
            result = ''
            current = before[0]
            count = 1
            for ch in before[1:]:
                if ch == current:
                    count += 1
                else:
                    result += str(count) + current
                    current = ch
                    count = 1
            return result
