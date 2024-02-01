# write-number-in-expanded-form
# https://www.codewars.com/kata/5842df8ccbd22792a4000245/

from unittest import TestCase


def expanded_form(num):
    result = []
    for i, v in enumerate(list(str(num))[::-1]):
        if v != "0":
            result.append(v + "0" * i)
    return " + ".join(result[::-1])


TestCase().assertEqual(expanded_form(12), '10 + 2')
TestCase().assertEqual(expanded_form(42), '40 + 2')
TestCase().assertEqual(expanded_form(70304), '70000 + 300 + 4')
