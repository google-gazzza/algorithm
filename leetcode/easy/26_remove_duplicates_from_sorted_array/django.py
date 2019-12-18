"""
https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/
Runtime: 104 ms, faster than 39.47% of Python3 online submissions for Remove Duplicates from Sorted Array.
Memory Usage: 14.4 MB, less than 99.18% of Python3 online submissions for Remove Duplicates from Sorted Array.
"""

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        prv = None
        cnt = 0

        for i in range(len(nums)):
            if nums[i-cnt] != prv or prv is None:
                prv = nums[i-cnt]

            else:
                del nums[i-cnt]
                cnt += 1

        return len(nums)
