"""
https://leetcode.com/problems/license-key-formatting/
Runtime: 132 ms, faster than 16.93% of Python3 online submissions for License Key Formatting.
Memory Usage: 14.5 MB, less than 30.77% of Python3 online submissions for License Key Formatting.
"""


class Solution:
    def licenseKeyFormatting(self, S: str, K: int) -> str:
        s = S.replace('-', '')
        s = s.upper()
        
        results = ''
        for idx, ch in enumerate(s[::-1]):
            if idx%K == 0:
                results = '-' + results
            results = ch + results
        
        return results[:-1]
            
