'''
https://leetcode.com/problems/reverse-bits/
Runtime: 60 ms, faster than 8.02% of Python3 online submissions for Reverse Bits.
Memory Usage: 12.5 MB, less than 100.00% of Python3 online submissions for Reverse Bits.
'''

class Solution:
    def reverseBits(self, n: int) -> int:
        
        binary = bin(n)
        reverse = binary[-1:1:-1]
        reverse = reverse + (32 - len(reverse)) * '0'
        
        return int(reverse,2)
        