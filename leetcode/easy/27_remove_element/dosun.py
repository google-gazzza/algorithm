"""https://leetcode.com/problems/remove-element/

Given an array nums and a value val, remove all instances of that value in-place and return the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Runtime: 40 ms, faster than 70.73% of Python3 online submissions for Remove Element.
Memory Usage: 13.7 MB, less than 6.06% of Python3 online submissions for Remove Element.
"""

class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        nums[:] = (x for x in nums if x != val)
        
        return len(nums)
