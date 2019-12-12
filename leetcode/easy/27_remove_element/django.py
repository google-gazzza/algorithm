"""
https://leetcode.com/problems/remove-element/submissions/
Runtime: 28 ms, faster than 97.44% of Python3 online submissions for Remove Element.
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for Remove Element.
"""

class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        cnt = 0
        total = len(nums)

        for i in range(total):
            if nums[i - cnt] == val:
                del nums[i - cnt]
                cnt += 1

        return total - cnt
