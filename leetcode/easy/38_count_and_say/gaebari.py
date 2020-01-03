"""
https://leetcode.com/problems/count-and-say/
Runtime: 36 ms, faster than 38.70% of Python3 online submissions for Count and Say.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Count and Say.
"""

class Solution:
    def countAndSay(self, n: int) -> str:
        result = '1'
        
        for i in range(1, n):
            tmp = ''
            j = 0
            
            while j < len(result):
                count = 1
                
                while j < len(result) - 1:
                    if result[j] != result[j + 1]:
                        break
                    count += 1
                    j += 1
                    
                tmp += str(count)
                tmp += result[j]
                j += 1
                
            result = tmp
        
        return result
