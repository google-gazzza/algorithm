'''
https://leetcode.com/problems/convert-a-number-to-hexadecimal/
Runtime: 28 ms, faster than 58.99% of Python3 online submissions for Convert a Number to Hexadecimal.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Convert a Number to Hexadecimal.
'''

class Solution:
    def toHex(self, num: int) -> str:
        
        if num == 0: return "0"
        
        res = []
        table = '0123456789abcdef'
        
        for i in range(8):
            res.append(num & 0xf)
            num = num >> 4
        
        return "".join([table[x] for x in res[::-1]]).lstrip('0')