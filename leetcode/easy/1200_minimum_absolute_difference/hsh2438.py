"""
https://leetcode.com/problems/minimum-absolute-difference/
Runtime: 340 ms, faster than 98.52% of Python3 online submissions for Minimum Absolute Difference.
Memory Usage: 26.8 MB, less than 100.00% of Python3 online submissions for Minimum Absolute Difference.
"""


class Solution:
    def minimumAbsDifference(self, arr: List[int]) -> List[List[int]]:
               
        arr.sort()
        
        min_difference = arr[-1] - arr[0]
        results = []
        
        for i in range(len(arr)-1):
            difference = arr[i+1] - arr[i]
            if difference == min_difference:
                results.append([arr[i], arr[i+1]])
            elif difference < min_difference:
                min_difference = difference
                results = [[arr[i], arr[i+1]]]
        
        return results
