"""
https://leetcode.com/problems/string-to-integer-atoi/
Runtime: 24 ms, faster than 99.46% of Python3 online submissions for String to Integer (atoi).
Memory Usage: 12.7 MB, less than 100.00% of Python3 online submissions for String to Integer (atoi).
"""


class Solution:
    INT_MAX = pow(2, 31) - 1
    INT_MIN = -pow(2, 31)

    validate_start = [str(i) for i in range(10)]
    validate_start.append('+')
    validate_start.append('-')

    validate = [str(i) for i in range(10)]

    def myAtoi(self, s: str) -> int:
        s = s.strip().split(' ')[0]

        results = ''
        for idx, ch in enumerate(s):
            if idx == 0 and ch in self.validate_start:
                results += ch
            elif idx > 0 and ch in self.validate:
                results += ch
            else:
                break

        if results == '' or results == '+' or results == '-':
            return 0

        results = int(results)

        if results > self.INT_MAX:
            return self.INT_MAX
        elif results < self.INT_MIN:
            return self.INT_MIN
        else:
            return results
