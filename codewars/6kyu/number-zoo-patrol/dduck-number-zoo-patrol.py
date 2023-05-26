# number-zoo-patrol
# Number Zoo Patrol
# difficulty: 6kyu
# https://www.codewars.com/kata/5276c18121e20900c0000235

def find_missing_number(numbers):
    n = len(numbers) + 1
    total_sum = n * (n + 1) / 2
    difference = math.floor(total_sum - sum(numbers))

    return difference


from unittest import TestCase

TestCase().assertEqual(find_missing_number([2, 3, 4]), 1)
TestCase().assertEqual(find_missing_number([1, 3, 4]), 2)
TestCase().assertEqual(find_missing_number([1, 2, 4]), 3)
TestCase().assertEqual(find_missing_number([1, 2, 3]), 4)
