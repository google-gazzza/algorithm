"""
https://leetcode.com/problems/intersection-of-two-arrays-ii/
Runtime: 40 ms, faster than 96.99% of Python3 online submissions for Intersection of Two Arrays II.
Memory Usage: 12.9 MB, less than 100.00% of Python3 online submissions for Intersection of Two Arrays II.
"""


from collections import Counter


class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        return (Counter(nums1) & Counter(nums2)).elements()
        
        
