# leetcode/easy/1071. Greatest Common Divisor of Strings
# 1071-greatest-common-divisor-of-strings
# URL: https://leetcode.com/problems/greatest-common-divisor-of-strings/description/?envType=study-plan-v2&id=leetcode-75
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference

class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        if len(str1) < len(str2):
            str1, str2 = str2, str1

        for i in range(len(str2)):
            length = len(str2) - i

        if str1.replace(str2[:length], "") == "" \
                and str2.replace(str2[:length], "") == "":
            return str2[:length]

        return ""


str1 = "ABCABC"
str2 = "ABC"
print(Solution().gcdOfStrings(str1, str2))
# Output: "ABC"


str1 = "ABABAB"
str2 = "ABAB"
print(Solution().gcdOfStrings(str1, str2))
# Output: "AB"


str1 = "LEET"
str2 = "CODE"
print(Solution().gcdOfStrings(str1, str2))
# Output: ""


str1 = "TAUXXTAUXXTAUXXTAUXXTAUXX"
str2 = "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"
print(Solution().gcdOfStrings(str1, str2))
# Output
# "TAUXXTAUXXTAUXX"
# Expected
# "TAUXX"
