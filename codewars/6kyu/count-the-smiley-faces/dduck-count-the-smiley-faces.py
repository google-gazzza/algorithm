# Count the smiley faces!
# https://www.codewars.com/kata/583203e6eb35d7980400002a

from unittest import TestCase

import re


def count_smileys(arr):
    return len(list(filter(lambda v: re.search(r'^[:;][-~]?[)D]$', v), arr)))


TestCase().assertEqual(count_smileys([':D', ':~)', ';~D', ':)']), 4)
TestCase().assertEqual(count_smileys([':)', ':(', ':D', ':O', ':;']), 2)
TestCase().assertEqual(count_smileys([';]', ':[', ';*', ':$', ';-D']), 1)
