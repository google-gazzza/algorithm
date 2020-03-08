# https://www.codewars.com/kata/580dda86c40fa6c45f00028a

from unittest import TestCase


def cube_odd(arr):
    if sum(list(map(lambda x: type(x) != int, arr))):
        return None
    return sum(map(lambda y: y ** 3, map(lambda x: x if x % 2 else 0, arr)))


TestCase().assertEqual(cube_odd([1, 2, 3, 4]), 28)
TestCase().assertEqual(cube_odd([-3, -2, 2, 3]), 0)
TestCase().assertEqual(cube_odd(["a", 12, 9, "z", 42]), None)
TestCase().assertEqual(cube_odd([True, False, 2, 4, 1]), None)
# your code here - return None if at least a value is not an integer
# const cubeOdd = (arr) => (arr.filter((v) => isNaN(v)).length ? undefined
#   : arr.reduce((acc, cur) => ((cur % 2) ? acc + cur ** 3 : acc), 0));
#
# console.log(cubeOdd([1, 2, 3, 4]), 28);
# console.log(cubeOdd([-3, -2, 2, 3]), 0);
# console.log(cubeOdd(['a', 12, 9, 'z', 42]), undefined);
# console.log(cubeOdd(['a', 5, 16, 27, -3]), undefined);
