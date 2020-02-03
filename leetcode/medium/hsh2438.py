"""
https://leetcode.com/problems/print-words-vertically/
Runtime: 28 ms, faster than 65.27% of Python3 online submissions for Print Words Vertically.
Memory Usage: 12.6 MB, less than 100.00% of Python3 online submissions for Print Words Vertically.
"""


class Solution:
    def printVertically(self, s: str) -> List[str]:
        
        strs = s.split(' ')
        max_len = max([len(string) for string in strs])
        
        results = []
        for i in range(max_len):
            temp = ''
            for string in strs:
                if i < len(string):
                    temp += string[i]
                else:
                    temp += ' '
            results.append(temp.rstrip())
        
        return results
