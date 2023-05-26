"""
1859-sorting-the-sentence
leetcode/easy/1859. Sorting the Sentence
Difficulty: easy
URL: https://leetcode.com/problems/sorting-the-sentence/
"""

from functools import cmp_to_key


class Solution:
    def sortSentence(self, s: str) -> str:
        def compare(a, b):
            if a[-1] == b[-1]:
                return 0

            if a[-1] > b[-1]:
                return 1
            return -1

        words = sorted(s.split(' '), key=cmp_to_key(compare))

        return ' '.join(list(map(lambda x: x[:-1], words)))


def test():
    s = Solution()

    string = "is2 sentence4 This1 a3"
    output = "This is a sentence"
    assert s.sortSentence(string) == output

    string = "Myself2 Me1 I4 and3"
    output = "Me Myself and I"
    assert s.sortSentence(string) == output
