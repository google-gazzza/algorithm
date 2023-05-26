"""
exclamation-marks-series-6
codewars/8kyu/Exclamation marks series #6
Difficulty: 8kyu
URL: https://www.codewars.com/kata/57faf7275c991027af000679/
"""


def remove(s: str, n: int):
    return s.replace('!', '', n)


def describe_remove():
    def it_should_success():
        tests = [
            # [[input], [expected]],
            [["Hi!", 1], "Hi"],
            [["Hi!", 100], "Hi"],
            [["Hi!!!", 1], "Hi!!"],
            [["Hi!!!", 100], "Hi"],
            [["!Hi", 1], "Hi"],
            [["!Hi!", 1], "Hi!"],
            [["!Hi!", 100], "Hi"],
            [["!!!Hi !!hi!!! !hi", 1], "!!Hi !!hi!!! !hi"],
            [["!!!Hi !!hi!!! !hi", 3], "Hi !!hi!!! !hi"],
            [["!!!Hi !!hi!!! !hi", 5], "Hi hi!!! !hi"],
            [["!!!Hi !!hi!!! !hi", 100], "Hi hi hi"],
        ]

        for inp, exp in tests:
            assert remove(*inp) == exp


def test():
    pass
