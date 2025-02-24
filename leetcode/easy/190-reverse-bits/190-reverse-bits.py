"""
190-reverse-bits
leetcode/easy/190. Reverse Bits
Difficulty: easy
URL: https://leetcode.com/problems/reverse-bits/
"""


class Solution:
    def reverseBits(self, n: int) -> int:
        binary_str = str(bin(n))[2:]
        padded_str = binary_str.zfill(32)
        reversed_str = padded_str[::-1]

        return int(reversed_str, 2)


# best practice
def reverseBits(self, n):
    ans = 0
    for i in range(32):
        ans = (ans << 1) + (n & 1)
        n >>= 1
    return ans


def describe_test():
    s = Solution()

    def it():
        n = int('00000010100101000001111010011100', 2)
        expect = 964176192
        # (00111001011110000010100101000000)
        assert s.reverseBits(n) == expect
