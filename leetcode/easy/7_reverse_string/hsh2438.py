"""
https://leetcode.com/problems/reverse-integer/
Runtime: 28 ms, faster than 97.78% of Python3 online submissions for Reverse Integer.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Reverse Integer.
"""
class Solution:
    def reverse(self, x: int) -> int:
        x_str = str(x)

        if x_str[0] == '-':
            x_reverse = x_str[0] + x_str[:0:-1]
        else:
            x_reverse = x_str[::-1]

        x_reverse = int(x_reverse)

        if x_reverse > pow(2, 31) or x_reverse < -pow(2, 31):
            return 0
        else:
            return x_reverse
