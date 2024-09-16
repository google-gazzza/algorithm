# Reverse polish notation calculator
# https://www.codewars.com/kata/52f78966747862fc9a0009ae/

from unittest import TestCase


def is_number(string):
    try:
        float(string)
        return True
    except ValueError:
        return False


def calc(expr):
    expressions = expr.split(" ")
    result = 0

    if len(expressions) == 1 and is_number(expressions[0]):
        result = float(expressions[0])

    while len(expressions) > 1:
        for i in range(len(expressions) - 2):
            if is_number(expressions[i]) \
                    and is_number(expressions[i + 1]) \
                    and not is_number(expressions[i + 2]):
                a = float(expressions[i])
                b = float(expressions[i + 1])
                operator = expressions[i + 2]
                if operator == '+':
                    result = a + b
                elif operator == '-':
                    result = a - b
                elif operator == '*':
                    result = a * b
                elif operator == '/':
                    result = a / b

                expressions[i] = result
                del expressions[i + 1]
                del expressions[i + 1]

    return result


TestCase().assertEqual(calc(""), 0, "Should work with empty string")
TestCase().assertEqual(calc("3"), 3, "Should parse numbers")
TestCase().assertEqual(calc("3.5"), 3.5, "Should parse float numbers")
TestCase().assertEqual(calc("1 3 +"), 4, "Should support addition")
TestCase().assertEqual(calc("1 3 *"), 3, "Should support multiplication")
TestCase().assertEqual(calc("1 3 -"), -2, "Should support subtraction")
TestCase().assertEqual(calc("4 2 /"), 2, "Should support division")
TestCase().assertEqual(calc("5 1 2 + 4 * + 3 -"), 14, "Should support division")
