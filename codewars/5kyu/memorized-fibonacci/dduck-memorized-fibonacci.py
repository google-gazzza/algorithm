# https://www.codewars.com/kata/529adbf7533b761c560004e5

from unittest import TestCase


def fibonacci(n, p=0, c=1, s=0, cache={"largestStep": 0}):
    if cache.get(n):
        return cache[n]

    if cache["largestStep"] > s:
        _s = cache["largestStep"]
        _p = cache[_s]
        _c = cache[_s - 1] + _p
        return fibonacci(n, _c, _p + _c, _s + 1)

    cache["largestStep"] = s
    cache[s] = p
    return fibonacci(n, c, p + c, s + 1)


TestCase().assertEqual(fibonacci(50), 12586269025)
TestCase().assertEqual(fibonacci(70), 190392490709135)
TestCase().assertEqual(fibonacci(60), 1548008755920)
