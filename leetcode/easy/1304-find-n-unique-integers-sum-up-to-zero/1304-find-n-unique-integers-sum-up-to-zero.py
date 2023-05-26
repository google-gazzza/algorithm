"""
1304-find-n-unique-integers-sum-up-to-zero
leetcode/easy/1304. Find N Unique Integers Sum up to Zero
Difficulty: easy
URL: https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/
"""

from typing import List


class Solution:
    def sumZero(self, n: int) -> List[int]:
        is_odd = n % 2 == 1

        sequence = [*range(1, (n // 2) + 1)]
        inverted_sequence = [-i for i in sequence[::-1]]

        if is_odd:
            return [*inverted_sequence, 0, *sequence]

        return [*inverted_sequence, *sequence]
