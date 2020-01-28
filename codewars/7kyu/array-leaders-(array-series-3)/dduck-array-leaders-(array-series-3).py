# https://www.codewars.com/kata/5a651865fd56cb55760000e0

from unittest import TestCase


# declarative programming style
def array_leaders(numbers):
    sum = 0
    result = []
    for x in reversed(numbers):
        if x > sum:
            result.append(x)
        sum += x
    return list(reversed(result))


# from functools import reduce
# did not paased test
# Functional programming style
# array_leaders = lambda numbers: list(
#     map(lambda y: y[0],
#         filter(lambda x: x[2],
#                reduce(lambda a, c: a + [(c, a[-1][0] + c, a[-1][1] < c)],
#                       numbers[::-1],
#                       [(0, 0, False)])[::-1]
#                )
#         )
# )


TestCase().assertEqual(array_leaders([1, 2, 3, 4, 0]), [4])
TestCase().assertEqual(array_leaders([16, 17, 4, 3, 5, 2]), [17, 5, 2])
TestCase().assertEqual(array_leaders([-1, -29, -26, -2]), [-1])
TestCase().assertEqual(array_leaders([-36, -12, -27]), [-36, -12])
TestCase().assertEqual(array_leaders([5, 2]), [5, 2])
TestCase().assertEqual(array_leaders([0, -1, -29, 3, 2]), [0, -1, 3, 2])

arr1 = [599, -228, -5, -332, 120, 724, 40, 784, 529, -187, 42, 599, -964, 465, 477, -773, -499, -358, -956, -486, -999,
        -325]

arr1_should_equal = [599, -228, -5, -332, 120, 724, 40, 784, 529, -187, 42, 599, -964, 465, 477, -773, -499, -358, -956,
                     -486]

# print(array_leaders(arr1))
TestCase().assertEqual(array_leaders(arr1), arr1_should_equal)
