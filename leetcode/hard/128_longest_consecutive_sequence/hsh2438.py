"""
https://leetcode.com/problems/longest-consecutive-sequence/
Runtime: 1544 ms, faster than 5.19% of Python online submissions for Longest Consecutive Sequence.
Memory Usage: 12.4 MB, less than 95.00% of Python online submissions for Longest Consecutive Sequence.
"""


class Solution(object):
    def longestConsecutive(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """

        def find(num):
            count = 1
            num_increase = num + 1
            while num_increase in nums:
                nums.remove(num_increase)
                count += 1
                num_increase += 1

            num_decrease = num - 1
            while num_decrease in nums:
                nums.remove(num_decrease)
                count += 1
                num_decrease -= 1

            return count

        max_len = 0
        while nums != []:
            consecutive_len = find(nums.pop())
            print(consecutive_len)
            if consecutive_len > max_len:
                max_len = consecutive_len

        return max_len
