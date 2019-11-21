"""https://leetcode.com/problems/assign-cookies/

Runtime: 148 ms, faster than 77.27% of Python online submissions for Assign Cookies.
Memory Usage: 13 MB, less than 66.67% of Python online submissions for Assign Cookies.
"""
class Solution(object):
    def findContentChildren(self, g, s):
        """
        :type g: List[int]
        :type s: List[int]
        :rtype: int
        """
        g.sort()
        s.sort()

        i = 0
        j = 0
        while i != len(g) and j != len(s):
            if s[j] >= g[i]:
                i += 1
            j += 1
            
        return i
