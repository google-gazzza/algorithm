"""
https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
Runtime: 88 ms, faster than 10.41% of Python3 online submissions for Two Sum II - Input array is sorted.
Memory Usage: 13.2 MB, less than 100.00% of Python3 online submissions for Two Sum II - Input array is sorted.
"""

class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        
        num1 = None
        
        for i in range(len(numbers)):
            if num1 is None:
                num1 = numbers[i]
            elif num1 == numbers[i]:
                continue
            
            num1 = numbers[i]
            num2b = target - num1
            
            for j in range(i+1, len(numbers)):
                num2 = numbers[j]
                
                if num2 > num2b:
                    break
                elif num2 == num2b:
                    return i+1, j+1