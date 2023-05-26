"""
2000-reverse-prefix-of-word
leetcode/easy/2000. Reverse Prefix of Word
URL: https://leetcode.com/problems/reverse-prefix-of-word/
"""


class Solution:
    def reversePrefix(self, word: str, ch: str) -> str:
        index = word.find(ch)
        return word[:index + 1][::-1] + word[index + 1:]


def test():
    word = "abcdefd"
    ch = "d"
    output = "dcbaefd"
    assert Solution().reversePrefix(word, ch) == output

    word = "xyxzxe"
    ch = "z"
    output = "zxyxxe"
    assert Solution().reversePrefix(word, ch) == output

    word = "abcd"
    ch = "z"
    output = "abcd"
    assert Solution().reversePrefix(word, ch) == output
