"""
1323-maximum-69-number
leetcode/easy/1323. Maximum 69 Number
URL: https://leetcode.com/problems/maximum-69-number/
"""


class Solution:
    def maximum69Number(self, num: int) -> int:
        return int(str(num).replace('6', '9', 1))


def test():
    num = 9669
    output = 9969
    assert Solution().maximum69Number(num) == output

    num = 9996
    output = 9999
    assert Solution().maximum69Number(num) == output

    num = 9999
    output = 9999
    assert Solution().maximum69Number(num) == output
