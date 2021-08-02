"""
simple-calculator
codewars/8kyu/simple calculator
Difficulty: 8kyu
URL: https://www.codewars.com/kata/5810085c533d69f4980001cf/
"""

def calculator(x, y, op):
    if not isinstance(x, int) or not isinstance(y, int):
        return 'unknown value'

    dict = {
        '+': lambda x, y: x + y,
        '-': lambda x, y: x - y,
        '*': lambda x, y: x * y,
        '/': lambda x, y: x / y,
    }

    if dict.get(op):
        return dict[op](x, y)
    return 'unknown value'


def test():
    assert calculator(6, 2, '+') == 8
    assert calculator(4, 3, '-') == 1
    assert calculator(5, 5, '*') == 25
    assert calculator(5, 4, '/') == 1.25
    assert calculator(6, 2, '&') == "unknown value"
