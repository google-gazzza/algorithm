"""
https://leetcode.com/problems/intersection-of-two-arrays/
Runtime: 44 ms, faster than 72.99% of Python3 online submissions for Intersection of Two Arrays.
Memory Usage: 13.1 MB, less than 96.08% of Python3 online submissions for Intersection of Two Arrays.
"""

class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        return set(nums1) & set(nums2)
