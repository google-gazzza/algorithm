"""https://leetcode.com/problems/1-bit-and-2-bit-characters/

Runtime: 52 ms, faster than 52.36% of Python3 online submissions for 1-bit and 2-bit Characters.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for 1-bit and 2-bit Characters.
"""
class Solution:
    def isOneBitCharacter(self, bits: List[int]) -> bool:
        i = 0
        len_bits = len(bits)
        while i < len_bits - 1:
            if bits[i] == 0: i += 1
            else: i+= 2
        return i == len_bits - 1 
