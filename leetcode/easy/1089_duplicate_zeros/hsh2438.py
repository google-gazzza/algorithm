"""
https://leetcode.com/problems/duplicate-zeros/
Runtime: 68 ms, faster than 81.44% of Python3 online submissions for Duplicate Zeros.
Memory Usage: 14.3 MB, less than 100.00% of Python3 online submissions for Duplicate Zeros.
"""


class Solution:
    def duplicateZeros(self, arr: List[int]) -> None:
        """
        Do not return anything, modify arr in-place instead.
        """
        
        arr_len = len(arr)
        
        for i in range(arr_len-1, -1, -1):
            if arr[i] == 0:
                arr.insert(i, 0)
        
        while(len(arr) > arr_len):
            arr.pop()
