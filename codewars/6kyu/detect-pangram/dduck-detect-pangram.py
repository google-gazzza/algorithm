# https://www.codewars.com/kata/545cedaa9943f7fe7b000048/

from unittest import TestCase
import re

is_pangram = lambda s: len(set(re.compile('[a-z]').findall(s.lower()))) == 26

pangram = "The quick, brown fox jumps over the lazy dog!"
TestCase().assertEqual(is_pangram(pangram), True)
