"""
278-first-bad-version
leetcode/easy/278. First Bad Version
Difficulty: easy
URL: https://leetcode.com/problems/first-bad-version/
"""

from typing import List

# The isBadVersion API is already defined for you.
# @param version, an integer
# @return an integer
# def isBadVersion(version):

import math


class Solution:
    def binarySearch(self, left, right):
        middle = math.floor((left + right) / 2)

        if not isBadVersion(middle) and isBadVersion(middle + 1):
            return middle + 1

        if isBadVersion(middle):
            right = middle - 1
        else:
            left = middle + 1
        return self.binarySearch(left, right)

    def firstBadVersion(self, n):
        if n == 1:
            return 1

        return self.binarySearch(1, n)