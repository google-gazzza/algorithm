"""https://leetcode.com/problems/intersection-of-two-arrays-ii/

Runtime: 80 ms, faster than 12.49% of Python3 online submissions for Intersection of Two Arrays II.
Memory Usage: 13.9 MB, less than 5.72% of Python3 online submissions for Intersection of Two Arrays II.
"""
class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        result = []
        for num in nums1:
            if num in nums2:
                result.append(num)
                nums2.remove(num)
                
        return result
        
        
"""https://leetcode.com/problems/intersection-of-two-arrays-ii/

More fast 

Runtime: 52 ms, faster than 92.01% of Python3 online submissions for Intersection of Two Arrays II.
Memory Usage: 13.9 MB, less than 5.72% of Python3 online submissions for Intersection of Two Arrays II.
"""
import collections

class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        return [*(collections.Counter(nums1) & collections.Counter(nums2)).elements()]


