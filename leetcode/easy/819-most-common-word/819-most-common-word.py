# leetcode/easy/819. Most Common Word
# 819-most-common-word
# URL: https://leetcode.com/problems/most-common-word/description/
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from typing import List
from collections import Counter


class Solution:
    def mostCommonWord(self, paragraph: str, bannedWords: List[str]) -> str:
        symbols = ["!", "?", "'", ",", ";", "."]
        paragraph = paragraph.lower()

        for symbol in symbols:
            paragraph = paragraph.replace(symbol, " ")

        words = paragraph.split(" ")
        words = list(filter(lambda x: x != "", words))
        words = list(filter(lambda x: x not in bannedWords, words))
        count = Counter(words)

        return count.most_common(1)[0][0]


paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]
# print(Solution().mostCommonWord(paragraph, banned))
# Output: "ball"

paragraph = "a."
banned = []
# print(Solution().mostCommonWord(paragraph, banned))
# Output: "a"

paragraph = "a, a, a, a, b,b,b,c, c"
banned = ["a"]
# print(Solution().mostCommonWord(paragraph, banned))
# output: "b"

paragraph = "abc abc? abcd the jeff!"
banned = ["abc", "abcd", "jeff"]
print(Solution().mostCommonWord(paragraph, banned))
