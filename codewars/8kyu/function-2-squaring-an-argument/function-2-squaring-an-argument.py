"""
function-2-squaring-an-argument
codewars/8kyu/Function 2 - squaring an argument
Difficulty: 8kyu
URL: https://www.codewars.com/kata/523b623152af8a30c6000027/
"""


def square(n):
    return n ** 2


def test_square():
    def this_should_be_successful():
        assert square(2) == 4
        assert square(50) == 2500
        assert square(1) == 1

    this_should_be_successful()
