# 520. Detect Capital
# https://leetcode.(com/problems/detect-capital/ (

# Runtime: 32 ms, faster than 36.50% of Python3 online submissions for Detect Capital.
# Memory Usage: 14 MB, less than 6.67% of Python3 online submissions for Detect Capital.
# Runtime: 36 ms, faster than 6.86% of Python3 online submissions for Detect Capital.
# Memory Usage: 13.6 MB, less than 6.67% of Python3 online submissions for Detect Capital.
# Runtime: 36 ms, faster than 6.86% of Python3 online submissions for Detect Capital.
# Memory Usage: 13.5 MB, less than 6.67% of Python3 online submissions for Detect Capital.

from unittest import TestCase

import re


class Solution:
    def detectCapitalUse(self, word: str) -> bool:
        return re.search('([A-Z][a-z]+$)|(^[A-Z]+$)|(^[a-z]*)', word).group(0) == word


TestCase().assertEqual(Solution().detectCapitalUse('USA'), True)
TestCase().assertEqual(Solution().detectCapitalUse('leetcode'), True)
TestCase().assertEqual(Solution().detectCapitalUse('Google'), True)
TestCase().assertEqual(Solution().detectCapitalUse('FlaG'), False)
