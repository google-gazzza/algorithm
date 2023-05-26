"""
1816-truncate-sentence
leetcode/easy/1816. Truncate Sentence
Difficulty: easy
URL: https://leetcode.com/problems/truncate-sentence/
"""


class Solution:
    def truncateSentence(self, s: str, k: int) -> str:
        return ' '.join(s.split()[:k])


def test():
    solution = Solution()

    s = "Hello how are you Contestant"
    k = 4
    output = "Hello how are you"
    assert solution.truncateSentence(s, k) == output

    s = "What is the solution to this problem"
    k = 4
    output = "What is the solution"
    assert solution.truncateSentence(s, k) == output

    s = "chopper is not a tanuki"
    k = 5
    output = "chopper is not a tanuki"
    assert solution.truncateSentence(s, k) == output
