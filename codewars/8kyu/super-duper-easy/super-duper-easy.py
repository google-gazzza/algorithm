"""
super-duper-easy
codears/8kyu/Super Duper Easy
Difficulty:8kyu
URL: https://www.codewars.com/kata/55a5bfaa756cfede78000026/
"""

def problem(a):
    try:
        int(a)
        return a * 50 + 6
    except:
        return 'Error'


def test_problem():
    assert problem("hello") == "Error"
    assert problem(1) == 56
