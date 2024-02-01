"""
https://leetcode.com/problems/hamming-distance/

Runtime: 20 ms, faster than 96.47% of Python3 online submissions for Hamming Distance.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Hamming Distance.
"""
class Solution:
    def hammingDistance(self, x: int, y: int) -> int:
        xor = x ^ y
        count = 0
        for i in range(32):
            count += (xor >> i) & 1
        return count
