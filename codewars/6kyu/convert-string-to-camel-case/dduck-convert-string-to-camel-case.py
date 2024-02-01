# Convert string to camel case
# https://www.codewars.com/kata/517abf86da9663f1d2000003/

from unittest import TestCase


def to_camel_case(text):
    result = []
    for i, v in enumerate(text):
        if not text[i - 1].isalpha():
            result.append(v.upper())
        else:
            result.append(v)

    return "".join(filter(lambda v: v.isalpha(), result))


TestCase().assertEqual(to_camel_case(''), '', "An empty string was provided but not returned")

TestCase().assertEqual(to_camel_case("the_stealth_warrior"), "theStealthWarrior",
                       "to_camel_case('the_stealth_warrior') did not return correct value")
TestCase().assertEqual(to_camel_case("The-Stealth-Warrior"), "TheStealthWarrior",
                       "to_camel_case('The-Stealth-Warrior') did not return correct value")
TestCase().assertEqual(to_camel_case("A-B-C"), "ABC", "to_camel_case('A-B-C') did not return correct value")
