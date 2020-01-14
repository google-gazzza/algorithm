"""
https://leetcode.com/problems/median-of-two-sorted-arrays/
Runtime: 116 ms, faster than 9.24% of Python3 online submissions for Median of Two Sorted Arrays.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Median of Two Sorted Arrays.
"""


class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        
        merged = []
    
        while len(nums1) > 0 and len(nums2) > 0:
            if nums1[0] < nums2[0]:
                merged.append(nums1.pop(0))
            else:
                merged.append(nums2.pop(0))
    
        if len(nums1) > 0:
            merged.extend(nums1)
    
        if len(nums2) > 0:
            merged.extend(nums2)
    
        len_merged = len(merged)
        if len_merged == 1:
            return merged[0]
        elif len_merged % 2:
            return merged[int(len_merged/2)]
        else:
            return (merged[int(len_merged/2)-1] + merged[int(len_merged/2)])/2
