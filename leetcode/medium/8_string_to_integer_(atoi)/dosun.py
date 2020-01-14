"""https://leetcode.com/problems/string-to-integer-atoi/

Runtime: 32 ms, faster than 66.93% of Python3 online submissions for String to Integer (atoi).
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for String to Integer (atoi).
"""
import re

class Solution:
    max_int, min_int = 2 ** 31 - 1, -2 ** 31
    def myAtoi(self, str: str) -> int:
        searched = re.compile("^([-+]?\d+)").search(str.strip())
        if searched is not None:
            result = searched.groups()[0]
            result_int = int(result)
            if result_int >= self.max_int: return self.max_int
            if result_int <= self.min_int: return self.min_int
            if result[0] == '+': return int(result[1:])
            return result_int
        else:
            return 0
