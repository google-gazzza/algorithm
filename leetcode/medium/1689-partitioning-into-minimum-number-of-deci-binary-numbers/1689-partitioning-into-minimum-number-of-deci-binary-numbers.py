"""
1689-partitioning-into-minimum-number-of-deci-binary-numbers
leetcode/easy/1689. Partitioning Into Minimum Number Of Deci-Binary Numbers
URL: https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/
"""


class Solution:
    def minPartitions(self, n: str) -> int:
        return int(max(n))
        # return max(map(int, n))


def test():
    n = "32"
    output = 3
    assert Solution().minPartitions(n) == output

    n = "82734"
    output = 8
    assert Solution().minPartitions(n) == output

    n = "27346209830709182346"
    output = 9
    assert Solution().minPartitions(n) == output
