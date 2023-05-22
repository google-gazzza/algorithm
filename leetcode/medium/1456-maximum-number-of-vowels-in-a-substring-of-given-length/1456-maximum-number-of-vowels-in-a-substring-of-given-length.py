# leetcode/medium/1456. Maximum Number of Vowels in a Substring of Given Length1456. Maximum Number of Vowels in a Substring of Given Length
# 1456-maximum-number-of-vowels-in-a-substring-of-given-length
# URL: https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/description/?envType=study-plan-v2&id=leetcode-75
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import List


class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        vowelCount = 0
        maxVowelCount = 0

        for i in range(k):
            if s[i] in "aeiou":
                vowelCount += 1

        maxVowelCount = vowelCount

        for i in range(k, len(s)):
            if vowelCount == k:
                return k

            if s[i] in "aeiou":
                vowelCount += 1

            if s[i - k] in "aeiou":
                vowelCount -= 1

            if vowelCount > maxVowelCount:
                maxVowelCount = vowelCount

        return maxVowelCount


s = "ibpbhixfiouhdljnjfflpapptrxgcomvnb"
k = 33
print(Solution().maxVowels(s, k))
# Output: 7


s = "weallloveyou"
k = 7
print(Solution().maxVowels(s, k))
# Output: 4

s = "zpuerktejfp"
k = 3
print(Solution().maxVowels(s, k))
# Output: 2


# s = "abciiidef"
# k = 3
# print(Solution().maxVowels(s, k))
# # Output: 3
#
# s = "aeiou"
# k = 2
# print(Solution().maxVowels(s, k))
# # Output: 2
#
# s = "leetcode"
# k = 3
# print(Solution().maxVowels(s, k))
# # Output: 2