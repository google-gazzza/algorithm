"""
https://leetcode.com/problems/relative-sort-array/
Runtime: 52 ms, faster than 13.83% of Python3 online submissions for Relative Sort Array.
Memory Usage: 12.6 MB, less than 100.00% of Python3 online submissions for Relative Sort Array.
"""


from collections import Counter


class Solution:
    def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:
        
        results = []
        counter = Counter(arr1)
        
        for num in arr2:
            for _ in range(counter[num]):
                results.append(num)
        
        for key in sorted(set(arr1) - set(arr2)):
            for _ in range(counter[key]):
                results.append(key)
        
        return results
