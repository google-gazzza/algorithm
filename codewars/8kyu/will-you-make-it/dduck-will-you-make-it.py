# https://www.codewars.com/kata/5861d28f124b35723e00005e/

from unittest import TestCase

zero_fuel = lambda distance, mpg, fuel_left: distance <= mpg * fuel_left

TestCase().assertEqual(zero_fuel(50, 25, 2), True)
TestCase().assertEqual(zero_fuel(100, 50, 1), False)
