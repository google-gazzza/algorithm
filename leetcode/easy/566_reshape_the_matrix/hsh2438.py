"""
https://leetcode.com/problems/reshape-the-matrix/
Runtime: 156 ms, faster than 12.01% of Python3 online submissions for Reshape the Matrix.
Memory Usage: 30.5 MB, less than 5.07% of Python3 online submissions for Reshape the Matrix.
"""


import numpy as np


class Solution:
    def matrixReshape(self, nums: List[List[int]], r: int, c: int) -> List[List[int]]:
        arr = np.array(nums)
        try:
            reshaped = arr.reshape(r, c)
            return reshaped.tolist()
        except:
            return nums
