"""
1662-check-if-two-string-arrays-are-equivalent 
leetcode/easy/1662. Check If Two String Arrays are Equivalent
Difficulty: easy
URL: https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
"""

class Solution:
    def arrayStringsAreEqual(self, word1: List[str], word2: List[str]) -> bool:
        return ''.join(word1) == ''.join(word2)


def test():
    solution = Solution()

    word1 = ["ab", "c"]
    word2 = ["a", "bc"]
    assert solution.arrayStringsAreEqual(word1, word2) == True

    word1 = ["a", "cb"]
    word2 = ["ab", "c"]
    assert solution.arrayStringsAreEqual(word1, word2) == False

    word1 = ["abc", "d", "defg"]
    word2 = ["abcddefg"]
    assert solution.arrayStringsAreEqual(word1, word2) == True
