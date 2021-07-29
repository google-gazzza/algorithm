"""
basic-calculator
codewars/7kyu/Basic Calculator
Difficulty: 7kyu
URL: https://www.codewars.com/kata/5296455e4fe0cdf2e000059f/
"""

def calculate(num1, operation, num2):
    if operation == '+':
        return num1 + num2
    if operation == '-':
        return num1 - num2

    if operation == '/':
        if num1 == 0 or num2 == 0:
            return None
        return num1 / num2
    if operation == '*':
        return num1 * num2

    return None


def calculate(num1, operation, num2):
    ops = {
        "+": (lambda x, y: x + y),
        "-": (lambda x, y: x - y),
        "*": (lambda x, y: x * y),
        "/": (lambda x, y: x / y),
    }

    try:
        return ops[operation](num1, num2)
    except:
        return None


def test_calculate():
    assert calculate(3.2, "+", 8) == 11.2
    assert calculate(3.2, "-", 8) == -4.8
    assert calculate(3.2, "/", 8) == 0.4
    assert calculate(3.2, "*", 8) == 25.6
    assert calculate(-3, "+", 0) == -3
    assert calculate(-3, "-", 0) == -3
    assert calculate(-2, "/", -2) == 1
    assert calculate(-3, "*", 0) == 0
    assert calculate(-3, "/", 0) == None
    assert calculate(-3, "w", 0) == None
    assert calculate(-3, "w", 1) == None
