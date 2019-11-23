"""https://leetcode.com/problems/letter-combinations-of-a-phone-number/

Runtime: 12 ms, faster than 94.25% of Python online submissions for Letter Combinations of a Phone Number.
Memory Usage: 11.7 MB, less than 73.81% of Python online submissions for Letter Combinations of a Phone Number.
"""
from itertools import product

class Solution(object):
    def letterCombinations(self, digits):
        """
        :type digits: str
        :rtype: List[str]
        """
        dic = {'2': "abc", '3': "def", '4': "ghi", '5': "jkl", '6': "mno", '7': "pqrs", '8': "tuv", '9': "wxyz"}
        if len(digits) == 0: return []
        return list(map(lambda  x: ''.join(x), product(*[dic[n] for n in digits])))
