'''
https://leetcode.com/problems/intersection-of-two-arrays/
Runtime: 28 ms, faster than 100.00% of Python3 online submissions for Intersection of Two Arrays.
Memory Usage: 12.9 MB, less than 100.00% of Python3 online submissions for Intersection of Two Arrays.
'''

class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        s1, s2 = set(nums1), set(nums2)
        return [x for x in s1 if x in s2 ]