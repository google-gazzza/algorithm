"""
1678-goal-parser-interpretation 
leetcode/easy/1678. Goal Parser Interpretation
Difficulty: easy
URL: https://leetcode.com/problems/goal-parser-interpretation/
"""

import re


class Solution:
    def interpret(self, command: str) -> str:
        command = re.sub(r"\(\)", 'o', command)
        command = re.sub(r"\(al\)", 'al', command)

        return command


def test():
    s = Solution()

    input = "G()(al)"
    expected_result = "Goal"
    assert s.interpret(input) == expected_result

    input = "G()()()()(al)"
    expected_result = "Gooooal"
    assert s.interpret(input) == expected_result

    input = "(al)G(al)()()G"
    expected_result = "alGalooG"
    assert s.interpret(input) == expected_resul