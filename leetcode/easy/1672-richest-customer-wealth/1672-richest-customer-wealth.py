"""
1672-richest-customer-wealth 
leetcode/easy/1672. Richest Customer Wealth
Difficulty: easy
URL: https://leetcode.com/problems/richest-customer-wealth/
"""


class Solution:
    def maximumWealth(self, accounts) -> int:
        return max(map(sum, accounts))


def test():
    s = Solution()
    input = [[1, 2, 3], [3, 2, 1]]
    output = 6
    assert s.maximumWealth(input) == output

    input = [[1, 2, 3], [3, 2, 1]]
    output = 6
    assert s.maximumWealth(input) == output
