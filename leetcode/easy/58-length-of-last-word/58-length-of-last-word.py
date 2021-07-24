"""
58-length-of-last-word
leetcode/easy/58. Length of Last Word
Difficulty: easy
URL: https://leetcode.com/problems/length-of-last-word
"""

class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        return len(*(s.strip().split(' ')[-1::]))


def test_length_of_last_word():
    solution = Solution()

    assert solution.lengthOfLastWord("Hello World") == 5
    assert solution.lengthOfLastWord(" ") == 0
    assert solution.lengthOfLastWord("a ") == 1
