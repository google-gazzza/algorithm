"""
https://leetcode.com/problems/excel-sheet-column-title/
Runtime: 36 ms, faster than 9.43% of Python3 online submissions for Excel Sheet Column Title.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Excel Sheet Column Title.
"""

class Solution:
    def convertToTitle(self, n: int) -> str:
        
        listN = []

        while n > 26:
            if n % 26 == 0:
                listN.append(26)
                n = (n - 26) // 26
            else:
                listN.append(n % 26)
                n = n // 26
        
        listN.append(n)
        listN.reverse()
        
        chrs = []
        
        for i in listN:
            chrs.append(chr(i+64))
            
        return ''.join(chrs)
        