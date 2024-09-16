"""
1342-number-of-steps-to-reduce-a-number-to-zero 
leetcode/easy/1342. Number of Steps to Reduce a Number to Zero
Difficulty: easy
URL: https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
"""

class Solution:
    def numberOfSteps(self, num: int) -> int:
        step = 0

        while num > 0:
            if num % 2 == 1:
                num -= 1
            else:
                num /= 2

            step += 1

        return step


def test():
    s = Solution()

    input = 14
    expect = 6
    assert s.numberOfSteps(input) == expect

    input = 8
    expect = 4
    assert s.numberOfSteps(input) == expect
