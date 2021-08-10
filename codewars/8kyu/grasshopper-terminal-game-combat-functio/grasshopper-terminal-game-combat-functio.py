"""
grasshopper-terminal-game-combat-function
codewars/8kyu/Grasshopper - Terminal game combat function
Difficulty: 8kyu
URL: https://www.codewars.com/kata/586c1cf4b98de0399300001d/
"""

def combat(health, damage):
    return max(health - damage, 0)


def describe_combat():
    def it_should_be_success():
        assert combat(100, 5) == 95
        assert combat(83, 16) == 67
        assert combat(20, 30) == 0
