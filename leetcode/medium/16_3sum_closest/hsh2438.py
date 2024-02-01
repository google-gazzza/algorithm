"""
https://leetcode.com/problems/3sum-closest/
Runtime: 164 ms, faster than 39.34% of Python3 online submissions for 3Sum Closest.
Memory Usage: 12.8 MB, less than 100.00% of Python3 online submissions for 3Sum Closest.
"""


class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums.sort()

        closest = sum(nums[:3])
        for i in range(1, len(nums) - 1):
            left = 0
            right = len(nums) - 1
            while i != left and i != right:
                total = nums[i] + nums[left] + nums[right]
                if abs(total-target) < abs(closest-target):
                    closest = total
                if total > target:
                    right -= 1
                elif total < target:
                    left += 1
                else:
                    return total

        return closest
