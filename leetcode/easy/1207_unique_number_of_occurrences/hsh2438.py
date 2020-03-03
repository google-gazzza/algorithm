"""
https://leetcode.com/problems/unique-number-of-occurrences/
Runtime: 36 ms, faster than 50.00% of Python3 online submissions for Unique Number of Occurrences.
Memory Usage: 13 MB, less than 100.00% of Python3 online submissions for Unique Number of Occurrences.
"""


from collections import Counter


class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        counter = Counter(arr)
        return len(set(counter.values())) == len(list(counter.values()))
