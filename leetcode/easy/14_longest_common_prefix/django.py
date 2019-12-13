"""
https://leetcode.com/problems/longest-common-prefix
Runtime: 24 ms, faster than 99.47% of Python3 online submissions for Longest Common Prefix.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Longest Common Prefix.
"""

class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        ans = []
        strs.sort(key=len)
        brk_condition = False

        if not strs:
            return ''

        for i in range(len(strs[0])):
            temp = strs[0][i]

            for item in strs:
                if item[i] != temp:
                    brk_condition = True
                    break

            if brk_condition:
                return ''.join(ans)
            else:
                ans.append(temp)

        return ''.join(ans)
