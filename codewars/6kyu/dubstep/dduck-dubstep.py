# https://www.codewars.com/kata/551dc350bf4e526099000ae5/
#
from unittest import TestCase
import re

song_decoder = lambda str: (re.sub(r"(WUB)+", " ", str)).strip()
# it's came from JavaScript best practice

TestCase().assertEqual(song_decoder("AWUBBWUBC"), "A B C", "WUB should be replaced by 1 space")
TestCase().assertEqual(song_decoder("AWUBWUBWUBBWUBWUBWUBC"), "A B C",
                       "multiples WUB should be replaced by only 1 space")
TestCase().assertEqual(song_decoder("WUBAWUBBWUBCWUB"), "A B C", "heading or trailing spaces should be removed")
