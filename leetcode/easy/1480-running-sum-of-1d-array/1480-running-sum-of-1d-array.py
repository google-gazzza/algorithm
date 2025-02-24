"""
1480-running-sum-of-1d-array
leetcode/easy/1480. Running Sum of 1d Array
Difficulty: easy
URL: https://leetcode.com/problems/running-sum-of-1d-array/
"""

class Solution:
    def runningSum(self, nums):
        result = [nums[0]]
        for i in range(1, len(nums)):
            result.append(result[-1] + nums[i])

        return result


def describe_test():
    s = Solution()

    def it():
        nums = [1, 1, 1, 1, 1]
        expect = [1, 2, 3, 4, 5]
        assert s.runningSum(nums) == expect

        nums = [1, 2, 3, 4]
        expect = [1, 3, 6, 10]
        assert s.runningSum(nums) == expect

