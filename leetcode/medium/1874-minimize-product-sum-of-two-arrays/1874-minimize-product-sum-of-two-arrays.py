"""
1874-minimize-product-sum-of-two-arrays 
leetcode/medium/1874. Minimize Product Sum of Two Arrays
Difficulty: medium
URL: https://leetcode.com/problems/minimize-product-sum-of-two-arrays/
"""


class Solution:
    def minProductSum(self, nums1: List[int], nums2: List[int]) -> int:
        sorted_nums1 = list(sorted(nums1))
        sorted_nums2 = list(reversed(sorted(nums2)))

        total = 0

        for i in range(len(sorted_nums1)):
            total += sorted_nums1[i] * sorted_nums2[i]

        return total


def test():
    solution = Solution()

    nums1 = [5, 3, 4, 2]
    nums2 = [4, 2, 2, 5]
    output = 40
    assert solution.minProductSum(nums1, nums2) == output

    nums1 = [2, 1, 4, 5, 7]
    nums2 = [3, 2, 4, 8, 6]
    output = 65
    assert solution.minProductSum(nums1, nums2) == output
