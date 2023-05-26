"""
1165-single-row-keyboard 
leetcode/easy/1165. Single-Row Keyboard
Difficulty: easy
URL: https://leetcode.com/problems/single-row-keyboard/
"""

class Solution:
    def calculateTime(self, keyboard: str, word: str) -> int:
        last_index = 0
        count = 0

        for x in word:
            target_index = keyboard.index(x)
            count += abs(last_index - target_index)
            last_index = target_index

        return count


def test():
    s = Solution()

    keyboard = "abcdefghijklmnopqrstuvwxyz"
    word = "cba"
    expected_result = 4
    assert s.calculateTime(keyboard, word) == expected_result

    keyboard = "pqrstuvwxyzabcdefghijklmno"
    word = "leetcode"
    expected_result = 73
    assert s.calculateTime(keyboard, word) == expected_result
