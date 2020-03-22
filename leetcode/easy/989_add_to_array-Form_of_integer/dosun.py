"""https://leetcode.com/problems/add-to-array-form-of-integer/

Runtime: 336 ms, faster than 39.50% of Python3 online submissions for Add to Array-Form of Integer.
Memory Usage: 13.6 MB, less than 45.00% of Python3 online submissions for Add to Array-Form of Integer.
"""
class Solution:
    def addToArrayForm(self, A: List[int], K: int) -> List[int]:
        summation = str(int(''.join(map(str, A))) + K)
        return [int(x) for x in summation]  
