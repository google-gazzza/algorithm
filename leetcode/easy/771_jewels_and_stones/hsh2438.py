"""
https://leetcode.com/problems/jewels-and-stones
Runtime: 48 ms, faster than 7.09% of Python3 online submissions for Jewels and Stones.
Memory Usage: 13.7 MB, less than 5.39% of Python3 online submissions for Jewels and Stones.
"""
class Solution:
    def numJewelsInStones(self, J: str, S: str) -> int:
        jewels = set(J)

        count = 0
        for s in S:
            if s in jewels:
                count += 1

        return count