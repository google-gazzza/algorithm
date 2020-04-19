"""
https://leetcode.com/problems/maximum-number-of-balloons/
Runtime: 44 ms, faster than 6.09% of Python3 online submissions for Maximum Number of Balloons.
Memory Usage: 14 MB, less than 100.00% of Python3 online submissions for Maximum Number of Balloons.
"""


from collections import Counter


class Solution:
    def maxNumberOfBalloons(self, text: str) -> int:
        text_counter = Counter(text)
        balloon = Counter('balloon')
        
        result = 0
        
        while text_counter & balloon == balloon:
            text_counter -= balloon
            result += 1
            
        return result
        
