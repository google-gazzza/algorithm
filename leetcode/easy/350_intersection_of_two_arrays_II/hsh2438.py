"""
https://leetcode.com/problems/intersection-of-two-arrays-ii/
Runtime: 44 ms, faster than 90.37% of Python3 online submissions for Intersection of Two Arrays II.
Memory Usage: 12.9 MB, less than 100.00% of Python3 online submissions for Intersection of Two Arrays II.
"""


from collections import Counter


class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        counter = Counter(nums1) & Counter(nums2)
        result = []
        for key in counter.keys():
            for _ in range(counter[key]):
                result.append(key)
        
        return result
        
        
