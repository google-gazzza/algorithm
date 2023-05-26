# triangle-type
# https://www.codewars.com/kata/53907ac3cd51b69f790006c5

from unittest import TestCase


def triangle_type(a, b, c):
    max_side = max(a, b, c)
    min_side = min(a, b, c)
    middle_side = sum([a, b, c]) - max_side - min_side

    sum_of_min_middle_side_square = min_side ** 2 + middle_side ** 2
    max_side_square = max_side ** 2

    if min_side + middle_side <= max_side:
        return 0
    if sum_of_min_middle_side_square == max_side_square:
        return 2
    if sum_of_min_middle_side_square > max_side_square:
        return 1
    if sum_of_min_middle_side_square < max_side_square:
        return 3

    return 0
