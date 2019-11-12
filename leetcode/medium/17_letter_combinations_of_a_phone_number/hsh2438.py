"""
https://leetcode.com/problems/letter-combinations-of-a-phone-number/
Runtime: 40 ms, faster than 40.54% of Python3 online submissions for Letter Combinations of a Phone Number.
Memory Usage: 13.8 MB, less than 5.88% of Python3 online submissions for Letter Combinations of a Phone Number.
"""

import itertools

class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if len(digits) == 0:
            return []

        letters_dic = {'2': ['a', 'b', 'c'], '3': ['d', 'e', 'f'], '4': ['g', 'h', 'i'], '5': ['j', 'k', 'l'],
                       '6': ['m', 'n', 'o'], '7': ['p', 'q', 'r', 's'], '8': ['t', 'u', 'v'], '9': ['w', 'x', 'y', 'z']}

        letters = [letters_dic[digit] for digit in digits]
        combi_list = list(itertools.product(*letters))

        return [''.join(combi) for combi in combi_list]
