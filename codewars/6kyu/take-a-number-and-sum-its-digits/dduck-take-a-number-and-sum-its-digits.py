# Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka
# https://www.codewars.com/kata/5626b561280a42ecc50000d1

from unittest import TestCase


def sum_dig_pow(a, b):  # range(a, b + 1) will be studied by the function
    result = []

    while a <= b:
        num = sum([v ** (i + 1) for i, v in enumerate(map(int, list(str(a))))])
        if num == a and a <= b:
            result.append(a)
        a += 1

    return result


TestCase().assertEqual(sum_dig_pow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9])
TestCase().assertEqual(sum_dig_pow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
TestCase().assertEqual(sum_dig_pow(10, 89), [89])
TestCase().assertEqual(sum_dig_pow(10, 100), [89])
TestCase().assertEqual(sum_dig_pow(90, 100), [])
TestCase().assertEqual(sum_dig_pow(89, 135), [89, 135])
