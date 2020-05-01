# validate-credit-card-number
# https://www.codewars.com/kata/5418a1dd6d8216e18a0012b2

from unittest import TestCase


def luhn_algorithm(i, v, is_even):
    if is_even and i % 2 == 0:
        value = v * 2
        if value > 9:
            return sum(map(int, list(str(value))))
        return value
    return v


def validate(n):
    strin = list(str(n))
    is_even = len(strin) % 2 == 0

    return sum(
        map(
            lambda v: luhn_algorithm(v[0], int(v[1]), is_even),
            list(enumerate(strin))
        )
    ) % 10 == 0


TestCase().assertEqual(validate(1714), False)
TestCase().assertEqual(validate(123), False)
TestCase().assertEqual(validate(1), False)
TestCase().assertEqual(validate(2121), True)
TestCase().assertEqual(validate(1230), True)
