"""
https://leetcode.com/problems/self-dividing-numbers/
Runtime: 68 ms, faster than 31.87% of Python3 online submissions for Self Dividing Numbers.
Memory Usage: 13.7 MB, less than 8.00% of Python3 online submissions for Self Dividing Numbers.
"""


class Solution:
    def selfDividingNumbers(self, left: int, right: int) -> List[int]:
        
        results = []
        for i in range(left, right + 1):
            digits = list(map(int, str(i)))
            
            is_divisible = True
            
            for digit in digits:
                if digit == 0 or i % digit != 0:
                    is_divisible = False
                    break       
                    
            if is_divisible:
                results.append(i)
        
        return results
