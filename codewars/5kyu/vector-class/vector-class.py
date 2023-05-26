# vector-class
# https://www.codewars.com/kata/526dad7f8c0eb5c4640000a4


from unittest import TestCase

from math import sqrt


class Vector:
    def __init__(self, values):
        self.val = values

    def compare_length(self, values):
        if len(self.val) != len(values.val):
            raise Exception()

    def add(self, values):
        self.compare_length(values)
        return Vector(list(map(lambda v: sum(v), list(zip(self.val, values.val)))))

    def subtract(self, values):
        self.compare_length(values)
        return Vector(list(map(lambda v: v[0] - v[1], list(zip(self.val, values.val)))))

    def dot(self, values):
        self.compare_length(values)
        return sum(map(lambda v: v[0] * v[1], list(zip(self.val, values.val))))

    def norm(self):
        return sqrt(sum(list(map(lambda v: v ** 2, self.val))))

    def equals(self, values):
        return len(
            list(
                filter(
                    lambda b: b is False, list(
                        map(lambda v: v[0] == v[1], list(zip(self.val, values.val)))
                    )
                )
            )
        ) == 0

    def __str__(self):
        return '(' + ','.join(map(str, self.val)) + ')'


a = Vector([1, 2])
b = Vector([3, 4])

TestCase().assertTrue(a.add(b).equals(Vector([4, 6])))

a = Vector([1, 2, 3])
b = Vector([3, 4, 5])

TestCase().assertTrue(a.add(b).equals(Vector([4, 6, 8])))
TestCase().assertTrue(a.subtract(b).equals(Vector([-2, -2, -2])))
TestCase().assertEqual(a.dot(b), 26)
TestCase().assertEqual(a.norm(), 14 ** 0.5)
