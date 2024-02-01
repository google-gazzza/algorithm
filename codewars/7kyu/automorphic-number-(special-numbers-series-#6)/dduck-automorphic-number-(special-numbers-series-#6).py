# codewars.com/kata/5a55f04be6be383a50000187/

from unittest import TestCase

automorphic = lambda n: "Automorphic" if n == int(str(n ** 2)[-len(str(n)):]) else "Not!!"
# inspired from JavaScript best solution


TestCase().assertEqual(automorphic(1), "Automorphic")
TestCase().assertEqual(automorphic(3), "Not!!")
TestCase().assertEqual(automorphic(6), "Automorphic")
TestCase().assertEqual(automorphic(9), "Not!!")
TestCase().assertEqual(automorphic(25), "Automorphic")
TestCase().assertEqual(automorphic(53), "Not!!")
TestCase().assertEqual(automorphic(76), "Automorphic")
TestCase().assertEqual(automorphic(95), "Not!!")
TestCase().assertEqual(automorphic(625), "Automorphic")
TestCase().assertEqual(automorphic(225), "Not!!")
print("<COMPLETEDIN::>")
