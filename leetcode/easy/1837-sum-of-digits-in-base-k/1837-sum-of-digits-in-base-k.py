"""
1837-sum-of-digits-in-base-k
leetcode/easy/1837. Sum of Digits in Base K
Difficulty: easy
URL: https://leetcode.com/problems/sum-of-digits-in-base-k/
"""

import numpy as np


class Solution:
    def sumBase(self, n: int, k: int) -> int:
        return sum(map(int, str(np.base_repr(n, k))))


##########
# interesting solution : https://leetcode.com/problems/sum-of-digits-in-base-k/discuss/1175067/Python3-self-explained
##########
class Solution:
    def sumBase(self, n: int, k: int) -> int:
        ans = 0
        while n:
            n, x = divmod(n, k)
            ans += x
        return ans


def test():
    n = 34
    k = 6
    output = 9
    assert Solution().sumBase(n, k) == output

    n = 10
    k = 10
    output = 1
    assert Solution().sumBase(n, k) == output

    n = 68
    k = 2
    output = 2
    assert Solution().sumBase(n, k) == output
