"""
https://leetcode.com/problems/assign-cookies/
Runtime: 332 ms, faster than 9.70% of Python3 online submissions for Assign Cookies.
Memory Usage: 15.7 MB, less than 20.09% of Python3 online submissions for Assign Cookies.
"""


class Solution:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        
        count = 0
        
        g.sort()
        s.sort()

        i = j = 0
        while True:
            if i == len(g) or j == len(s):
                break
            if g[i] <= s[j]:
                count += 1
                i += 1
            j += 1

        return count
