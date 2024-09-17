"""
760-find-anagram-mappings
leetcode/easy/760. Find Anagram Mappings
Difficulty: easy
URL: https://leetcode.com/problems/find-anagram-mappings/
"""

from typing import List


class Solution:
    def anagramMappings(self, nums1: List[int], nums2: List[int]) -> List[int]:
        return [nums2.index(target) for target in nums1]


def test():
    s = Solution()
    nums1 = [12, 28, 46, 32, 50]
    nums2 = [50, 12, 32, 46, 28]
    output = [1, 4, 3, 2, 0]
    assert s.anagramMappings(nums1, nums2) == output

    nums1 = [84, 46]
    nums2 = [84, 46]
    output = [0, 1]
    assert s.anagramMappings(nums1, nums2) == output
