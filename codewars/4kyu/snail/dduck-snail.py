# snail
# https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

from unittest import TestCase


def snail(arrays):
    result = []
    directionCount = 0

    while len(arrays):
        direction = directionCount % 4

        if direction == 0:
            result.extend(arrays.pop(0))
        elif direction == 1:
            result.extend(list(map(lambda array: array.pop(), arrays)))
        elif direction == 2:
            temp = arrays.pop()
            temp.reverse()
            result.extend(temp)
        elif direction == 3:
            arrays.reverse()
            result.extend(list(map(lambda array: array.pop(0), arrays)))
            arrays.reverse()

        directionCount += 1

    return result


# best practice in CodeWars
# def snail(array):
#     a = []
#     while array:
#         a.extend(list(array.pop(0)))
#         array = list(zip(*array))
#         array.reverse()
#     return a


array = [[1, 2, 3],
         [4, 5, 6],
         [7, 8, 9]]
expected = [1, 2, 3, 6, 9, 8, 7, 4, 5]
TestCase().assertEqual(snail(array), expected)

array = [[1, 2, 3],
         [8, 9, 4],
         [7, 6, 5]]
expected = [1, 2, 3, 4, 5, 6, 7, 8, 9]
TestCase().assertEqual(snail(array), expected)
