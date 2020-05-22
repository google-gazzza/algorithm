'''
https://leetcode.com/problems/add-strings/
Runtime: 392 ms, faster than 5.24% of Python3 online submissions for Add Strings.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Add Strings.
'''

class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        int1, int2 = 0, 0
        len1, len2 = len(num1), len(num2)
        
        for i in range(len1):
            int1 += (ord(num1[i]) - 48) * pow(10,(len1 - 1) - i)

        for i in range(len2):
            int2 += (ord(num2[i]) - 48) * pow(10,(len2 - 1) - i)
            
        return str(int1 + int2)