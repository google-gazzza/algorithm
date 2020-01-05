"""
https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
Runtime: 100 ms, faster than 50.70% of Python3 online submissions for Find First and Last Position of Element in Sorted Array.
Memory Usage: 14 MB, less than 8.93% of Python3 online submissions for Find First and Last Position of Element in Sorted Array.
"""


class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        if nums == []:
            return [-1, -1]
        self.position = -1

        def divide_and_conquer(start, end, target):
            if start >= end:
                if nums[start] == target:
                    self.position = start
                return
            else:
                mid = int((end - start) / 2) + start
                if nums[mid] == target:
                    self.position = mid
                    return
                else:
                    divide_and_conquer(start, mid - 1, target)
                    divide_and_conquer(mid + 1, end, target)

        divide_and_conquer(0, len(nums) - 1, target)

        if self.position is -1:
            return [-1, -1]
        else:
            result = [self.position]
            left = self.position - 1
            while left > -1 and nums[left] is target:
                result.insert(0, left)
                left -= 1
            right = self.position + 1
            while right < len(nums) and nums[right] is target:
                result.append(right)
                right += 1

        return [result[0], result[-1]]