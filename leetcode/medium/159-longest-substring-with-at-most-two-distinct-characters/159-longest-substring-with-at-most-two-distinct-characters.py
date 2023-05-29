# leetcode/medium/159. Longest Substring with At Most Two Distinct Characters
# 159-longest-substring-with-at-most-two-distinct-characters
# URL: https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
class Solution:
    def lengthOfLongestSubstringTwoDistinct(self, s: str) -> int:
        map = dict()
        count = 0
        max_len = 0

        for i in range(len(s)):
            map[s[i]] = map.get(s[i], 0) + 1
            count += 1

            if len(map) <= 2:
                max_len = max(max_len, count)
            else:
                while len(map) > 2:
                    target_index = i - count + 1
                    target_char = s[target_index]
                    map[target_char] -= 1

                    if map[target_char] == 0:
                        del map[target_char]

                    count -= 1

        return max_len


s = "eceba"
print(Solution().lengthOfLongestSubstringTwoDistinct(s))
# Output: 3
s = "ccaabbb"
print(Solution().lengthOfLongestSubstringTwoDistinct(s))
# Output: 5
