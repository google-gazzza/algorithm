"""
1134-armstrong-number
leetcode/easy/1134. Armstrong Number
URL: https://leetcode.com/problems/armstrong-number/
"""


class Solution:
    def isArmstrong(self, n: int) -> bool:
        digit_str = str(n)
        digit_len = len(digit_str)

        return sum(map(lambda x: int(x) ** digit_len, digit_str)) == n


def test():
    n = 153
    output = True
    assert Solution().isArmstrong(n) == output

    n = 123
    output = False
    assert Solution().isArmstrong(n) == output
