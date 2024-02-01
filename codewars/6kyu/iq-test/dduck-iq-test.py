# IQ Test
# https://www.codewars.com/kata/552c028c030765286c00007d

from unittest import TestCase


def iq_test(numbers):
    splited_numbers = list(map(int, numbers.split(" ")))
    is_even_number_more = len(list(filter(lambda x: x % 2 == 0, splited_numbers))) > 1

    if is_even_number_more:
        return [i for i, v in enumerate(splited_numbers) if v % 2 != 0][0] + 1

    return [i for i, v in enumerate(splited_numbers) if v % 2 == 0][0] + 1


TestCase().assertEqual(iq_test("2 4 7 8 10"), 3)
TestCase().assertEqual(iq_test("1 2 2"), 1)
