"""
https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix
Runtime: 176 ms, faster than 99.53% of Python3 online submissions for Kth Smallest Element in a Sorted Matrix.
Memory Usage: 18.6 MB, less than 9.09% of Python3 online submissions for Kth Smallest Element in a Sorted Matrix.
"""


class Solution:
    def kthSmallest(self, matrix: List[List[int]], k: int) -> int:
        flatten = [item for row in matrix for item in row]
        flatten.sort()
        return flatten[k-1]
