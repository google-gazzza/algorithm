# https://www.codewars.com/kata/511f11d355fe575d2c000001/

from unittest import TestCase


two_oldest_ages = lambda ages: sorted(ages)[-2::]


TestCase().assertEqual(two_oldest_ages([1, 5, 87, 45, 8, 8]), [45, 87])
TestCase().assertEqual(two_oldest_ages([6, 5, 83, 5, 3, 18]), [18, 83])
TestCase().assertEqual(two_oldest_ages([10, 1]), [1, 10])
