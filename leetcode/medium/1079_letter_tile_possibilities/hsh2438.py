"""
https://leetcode.com/problems/letter-tile-possibilities/
Runtime: 56 ms, faster than 84.28% of Python3 online submissions for Letter Tile Possibilities.
Memory Usage: 14.1 MB, less than 100.00% of Python3 online submissions for Letter Tile Possibilities.
"""


from itertools import permutations


class Solution:
    def numTilePossibilities(self, tiles: str) -> int:
        results = []
        
        for i in range(1, len(tiles)+1):
            results.extend(list(map(''.join, permutations(tiles, i))))
        
        return len(set(results))
