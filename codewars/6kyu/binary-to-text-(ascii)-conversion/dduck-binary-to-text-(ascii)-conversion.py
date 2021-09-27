# https://www.codewars.com/kata/5583d268479559400d000064/

from unittest import TestCase

binary_to_string = lambda b, bit=8: "".join([chr(int(b[i:i + bit], 2)) for i in range(0, len(b), bit)])

TestCase().assertEqual(binary_to_string('0100100001100101011011000110110001101111'), 'Hello')
TestCase().assertEqual(binary_to_string('00110001001100000011000100110001'), '1011')
