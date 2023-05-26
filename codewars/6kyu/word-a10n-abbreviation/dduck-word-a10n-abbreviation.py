# Word a10n (abbreviation)
# https://www.codewars.com/kata/5375f921003bf62192000746/

from unittest import TestCase

import re


def a10n(s):
    if len(s[0]) <= 3:
        return s[0]
    return f'{s[0][0]}{len(s[0]) - 2}{s[0][-1]}'


def abbreviate(s):
    return re.sub(r'[a-zA-Z]+', a10n, s)


TestCase().assertEqual(abbreviate("internationalization"), "i18n")
TestCase().assertEqual(abbreviate("accessibility"), "a11y")
TestCase().assertEqual(abbreviate("Accessibility"), "A11y")
TestCase().assertEqual(abbreviate("elephant-ride"), "e6t-r2e")
TestCase().assertEqual(abbreviate("elephant-rides are really fun!"), "e6t-r3s are r4y fun!")
TestCase().assertEqual(
    abbreviate("balloon: sits_sat a_sits_double-barreled balloon: double-barreled"),
    "b5n: s2s_sat a_s2s_d4e-b6d b5n: d4e-b6d"
)
