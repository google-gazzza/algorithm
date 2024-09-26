# leetcode/medium/2743. Count Substrings Without Repeating Character
# 2743-count-substrings-without-repeating-character
# URL: https://leetcode.com/problems/count-substrings-without-repeating-character/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
class Solution:
    def numberOfSpecialSubstrings(self, s: str) -> int:
        count = 0

        for i in range(len(s)):
            char_set = set(s[i])
            count += 1

            for j in range(i + 1, len(s)):
                if s[j] in char_set:
                    break
                else:
                    char_set.add(s[j])

                count += 1

        return count


s = "abcd"
assert Solution().numberOfSpecialSubstrings(s) == 10
# Output: 10

s = "ooo"
assert Solution().numberOfSpecialSubstrings(s) == 3
# Output: 3

s = "abab"
assert Solution().numberOfSpecialSubstrings(s) == 7
# Output: 7

s = "bddqc"
assert Solution().numberOfSpecialSubstrings(s) == 9
