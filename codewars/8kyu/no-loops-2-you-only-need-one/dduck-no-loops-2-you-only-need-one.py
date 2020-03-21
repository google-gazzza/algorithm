# https://www.codewars.com/kata/57cc40b2f8392dbf2a0003ce

from unittest import TestCase

check = lambda a, x: x in a

TestCase().assertEqual(check([66, 101], 66), True)
TestCase().assertEqual(check([80, 117, 115, 104, 45, 85, 112, 115], 45), True)
TestCase().assertEqual(check(['t', 'e', 's', 't'], 'e'), True)
TestCase().assertEqual(check(['what', 'a', 'great', 'kata'], 'kat'), False)

# const check = (a, x) => new Set(a).has(x);
#
# console.log(check([66, 101], 66), true);
# console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
# console.log(check(['t', 'e', 's', 't'], 'e'), true);
# console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false);
