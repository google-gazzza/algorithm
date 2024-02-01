# https://www.codewars.com/kata/5b39e3772ae7545f650000fc

from unittest import TestCase

from collections import OrderedDict

remove_duplicate_words = lambda s: " ".join([x for x in OrderedDict.fromkeys(s.split(' '))])

TestCase().assertEqual(
    remove_duplicate_words("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"),
    "alpha beta gamma delta")
TestCase().assertEqual(remove_duplicate_words("my cat is my cat fat"), "my cat is fat")
