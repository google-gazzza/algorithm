# Two Sum
# https://www.codewars.com/kata/52c31f8e6605bcc646000082

from unittest import TestCase


def two_sum(numbers, target):
    copied_numbers = sorted(filter(lambda x: x <= target, numbers))
    left_index = 0
    right_index = len(copied_numbers) - 1

    while left_index < right_index:
        total = copied_numbers[left_index] + copied_numbers[right_index]
        if total == target:
            break
        if total < target:
            left_index += 1
        else:
            right_index -= 1

    return [numbers.index(copied_numbers[left_index]),
            len(numbers) - 1 - numbers[::-1].index(copied_numbers[right_index])]


TestCase().assertEqual(sorted(two_sum([1, 2, 3], 4)), [0, 2])
TestCase().assertEqual(sorted(two_sum([1234, 5678, 9012], 14690)), [1, 2])
TestCase().assertEqual(sorted(two_sum([2, 2, 3], 4)), [0, 1])
