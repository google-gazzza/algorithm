# https://www.codewars.com/kata/56f173a35b91399a05000cb7/

from unittest import TestCase

find_longest = lambda string: len(sorted(string.split(), key=len).pop())

TestCase().assertEqual(find_longest("The quick white fox jumped around the massive dog"), 7)
TestCase().assertEqual(find_longest("Take me to tinseltown with you"), 10)
TestCase().assertEqual(find_longest("Sausage chops"), 7)
TestCase().assertEqual(find_longest("Wind your body and wiggle your belly"), 6)
TestCase().assertEqual(find_longest("Lets all go on holiday"), 7)
