"""
https://leetcode.com/problems/3sum/
Runtime: 1820 ms, faster than 17.72% of Python3 online submissions for 3Sum.
Memory Usage: 16.1 MB, less than 100.00% of Python3 online submissions for 3Sum.
"""
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()

        result = set()
        last_idx = len(nums)-1
        for i in range(1, last_idx):
            left = 0
            right = last_idx

            while i != left and i != right:
                total = nums[i] + nums[left] + nums[right]
                if total == 0:
                    temp = (nums[left], nums[i], nums[right])
                    result.add(temp)
                    left += 1
                    right -= 1
                elif total > 0:
                    right -= 1
                elif total < 0:
                    left += 1

        return result
