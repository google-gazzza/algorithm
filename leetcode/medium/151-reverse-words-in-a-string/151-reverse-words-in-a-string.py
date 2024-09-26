# 151-reverse-words-in-a-string
# leetcode/medium/151. Reverse Words in a String
# URL: https://leetcode.com/problems/reverse-words-in-a-string/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference

class Solution:
    def reverseWords(self, s: str) -> str:
        return ' '.join(s.split()[::-1])


s = "the sky is blue"
print(Solution().reverseWords(s))
# Output: "blue is sky the"

s = "  hello world  "
print(Solution().reverseWords(s))
# Output: "world hello"

s = "a good   example"
print(Solution().reverseWords(s))
# Output: "example good a"
