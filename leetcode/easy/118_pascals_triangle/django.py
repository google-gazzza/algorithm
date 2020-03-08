"""
https://leetcode.com/problems/pascals-triangle/
Runtime: 32 ms, faster than 61.63% of Python3 online submissions for Pascal's Triangle.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Pascal's Triangle.
"""

class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        result = []
        
        for i in range(numRows):
            if i == 0:
                result.append([1])
            
            else:
                prvRows = result[i-1]
                curRows = prvRows + [0]              
                
                for j in range(i):
                    curRows[j + 1] += prvRows[j]
                
                result.append(curRows)
        
        return result
