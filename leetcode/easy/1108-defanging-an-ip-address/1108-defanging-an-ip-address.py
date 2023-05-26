"""
1108-defanging-an-ip-address 
leetcode/easy/1108. Defanging an IP Address
Difficulty: easy
URL: https://leetcode.com/problems/defanging-an-ip-address/
"""

import re


class Solution:
    def defangIPaddr(self, address: str) -> str:
        return re.sub(r"\.", "[.]", address)


def test():
    s = Solution()
    input = "1.1.1.1"
    expect_result = "1[.]1[.]1[.]1"
    assert s.defangIPaddr(input) == expect_result

    input = "255.100.50.0"
    expect_result = "255[.]100[.]50[.]0"
    assert s.defangIPaddr(input) == expect_result
