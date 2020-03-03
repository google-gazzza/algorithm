"""
https://leetcode.com/problems/combinations/
Runtime: 72 ms, faster than 99.66% of Python3 online submissions for Combinations.
Memory Usage: 14.2 MB, less than 100.00% of Python3 online submissions for Combinations.
"""


from itertools import combinations


class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        return list(combinations([num for num in range(1, n+1)], k))
        
