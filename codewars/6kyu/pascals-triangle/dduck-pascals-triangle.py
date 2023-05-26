# pascals-triangle
# https://www.codewars.com/kata/5226eb40316b56c8d500030f/

from unittest import TestCase


def pascals_triangle(n):
    result = [[1]]
    while n > 1:
        temp = [1]
        for i in range(len(result[-1]) - 1):
            temp.append(result[-1][i] + result[-1][i + 1])
        temp.append(1)
        result.append(temp)
        n -= 1
    flat_list = [item for sublist in result for item in sublist]
    return flat_list


TestCase().assertEqual(pascals_triangle(1), [1], "1 level triangle incorrect")
TestCase().assertEqual(pascals_triangle(2), [1, 1, 1], "2 level triangle incorrect")
TestCase().assertEqual(pascals_triangle(3), [1, 1, 1, 1, 2, 1], "3 level triangle incorrect")
