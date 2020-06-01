"""
https://leetcode.com/problems/integer-replacement/
Runtime: 328 ms, faster than 7.88% of Python3 online submissions for Integer Replacement.
Memory Usage: 13.8 MB, less than 100.00% of Python3 online submissions for Integer Replacement.
"""


class Solution:
    def integerReplacement(self, n: int) -> int:
        
        def recursive(n, count):
            
            if n == 1:
                return count
            
            if n%2 == 0:
                return recursive(int(n/2), count+1)
            else:
                return min(recursive(n+1, count+1), recursive(n-1, count+1))
            
        return recursive(n, 0)
