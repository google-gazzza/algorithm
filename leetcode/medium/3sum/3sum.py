"""
3sum
leetcode/medium/3sum
Difficulty: medium
URL: https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/776/
"""

from typing import List


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        result = []
        nums = sorted(nums)
        last_index = len(nums)
        _set = set()

        for i in range(last_index - 2):
            left_index = i + 1
            right_index = last_index - 1

            while left_index < right_index:
                _total = nums[i] + nums[left_index] + nums[right_index]

                if _total == 0:
                    _str = str([nums[i], nums[left_index], nums[right_index]])

                    if _str not in _set:
                        _set.add(_str)
                        result.append([nums[i], nums[left_index], nums[right_index]])

                if _total < 0:
                    left_index += 1
                else:
                    right_index -= 1

        return result


def test():
    nums = [-1, 0, 1, 2, -1, -4]
    output = [[-1, -1, 2], [-1, 0, 1]]
    assert Solution().threeSum(nums) == output

    nums = []
    output = []
    assert Solution().threeSum(nums) == output

    nums = [0]
    output = []
    assert Solution().threeSum(nums) == output
