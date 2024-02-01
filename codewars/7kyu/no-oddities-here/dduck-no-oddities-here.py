# https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce/

from unittest import TestCase

no_odds = lambda values: list(filter(lambda x: x % 2 == 0, values))

# Return list of only even values
TestCase().assertEqual(no_odds([0, 1]), [0], 'Zero through one')
TestCase().assertEqual(no_odds([0, 1, 2, 3]), [0, 2], 'Zero through three')
TestCase().assertEqual(no_odds([1, 3, 5, 7, 9]), [], 'Odds through ten')
TestCase().assertEqual(no_odds([0, 2, 4, 6, 8, 10]), [0, 2, 4, 6, 8, 10], 'Evens through ten')
TestCase().assertEqual(no_odds([-1, -3, -5, -7, -9]), [], 'Negative odds')
TestCase().assertEqual(no_odds([2, 4, 8, 6, 0]), [2, 4, 8, 6, 0], 'Out of order')
TestCase().assertEqual(no_odds([]), [], 'Empty list')
