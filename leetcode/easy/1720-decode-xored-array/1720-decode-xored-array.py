"""
1720-decode-xored-array 
leetcode/easy/1720. Decode XORed Array
Difficulty: easy
URL: https://leetcode.com/problems/decode-xored-array/
"""

from typing import List


class Solution:
    def decode(self, encoded: List[int], first: int) -> List[int]:
        result = [first]

        for x in encoded:
            result.append(x ^ result[-1])

        return result


def test():
    s = Solution()
    encoded = [1, 2, 3]
    first = 1
    output = [1, 0, 2, 1]
    assert s.decode(encoded, first) == output

    encoded = [6, 2, 7, 3]
    first = 4
    output = [4, 2, 0, 7, 4]
    assert s.decode(encoded, first) == output
