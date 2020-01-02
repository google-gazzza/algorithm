"""https://leetcode.com/problems/median-of-two-sorted-arrays/

Runtime: 88 ms, faster than 96.56% of Python3 online submissions for Median of Two Sorted Arrays.
Memory Usage: 12.9 MB, less than 100.00% of Python3 online submissions for Median of Two Sorted Arrays.
"""
class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        nums = sorted(nums1 + nums2)
        n = len(nums)
        result = (sum(nums[n//2-1:n//2+1])/2.0, nums[n//2])[n % 2] if n else None 
        return result
        
        
"""Using statistics library 

Runtime: 92 ms, faster than 91.88% of Python3 online submissions for Median of Two Sorted Arrays.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for Median of Two Sorted Arrays.
"""
from statistics import median

class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        return median(nums1 + nums2)
