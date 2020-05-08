"""
https://leetcode.com/problems/hamming-distance/
Runtime: 32 ms, faster than 40.10% of Python3 online submissions for Hamming Distance.
Memory Usage: 13.7 MB, less than 8.70% of Python3 online submissions for Hamming Distance.
"""


class Solution:
    def hammingDistance(self, x: int, y: int) -> int:
        x_bits = "{0:{fill}32b}".format(x, fill='0')
        y_bits = "{0:{fill}32b}".format(y, fill='0')

        result = 0

        for i in range(len(x_bits)):
            if x_bits[i] != y_bits[i]:
                result += 1
        
        return result
