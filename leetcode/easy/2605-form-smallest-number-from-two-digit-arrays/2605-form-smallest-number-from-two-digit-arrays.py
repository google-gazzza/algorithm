# leetcode/easy/2605. Form Smallest Number From Two Digit Arrays
# 2605-form-smallest-number-from-two-digit-arrays
# URL: https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import List


class Solution:
    def minNumber(self, nums1: List[int], nums2: List[int]) -> int:
        intersection = list(set(nums1) & set(nums2))

        if len(intersection) > 0:
            intersection.sort()

            return intersection[0]

        nums1.sort()
        nums2.sort()

        candidates = [nums1[0], nums2[0]]
        candidates.sort()

        return int(''.join(map(str, candidates)))


nums1 = [4, 1, 3]
nums2 = [5, 7]
print(Solution().minNumber(nums1, nums2))
# Output: 15

nums1 = [3, 5, 2, 6]
nums2 = [3, 1, 7]
print(Solution().minNumber(nums1, nums2))
# Output: 3
