# https://www.codewars.com/kata/576757b1df89ecf5bd00073b
# build-tower

from unittest import TestCase


def tower_builder(n_floors):
    max_tower_size = n_floors * 2 - 1
    n = 1
    arr = []

    while n <= n_floors:
        current_floor = ("*" * (n * 2 - 1)).center(max_tower_size, ' ')
        arr.append(current_floor)
        n = n + 1

    return arr


TestCase().assertEqual(tower_builder(1), ['*', ])
TestCase().assertEqual(tower_builder(2), [' * ', '***'])
TestCase().assertEqual(tower_builder(3), ['  *  ', ' *** ', '*****'])
