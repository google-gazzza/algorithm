"""
https://leetcode.com/problems/permutation-sequence/
Runtime: 2176 ms, faster than 9.50% of Python3 online submissions for Permutation Sequence.
Memory Usage: 57.4 MB, less than 8.33% of Python3 online submissions for Permutation Sequence.
"""


from itertools import permutations


class Solution:
    def getPermutation(self, n: int, k: int) -> str:
        return ''.join(list(map(str, list(permutations([i for i in range(1, n+1)]))[k-1])))
