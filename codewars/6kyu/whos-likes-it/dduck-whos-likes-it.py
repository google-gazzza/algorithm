# https://www.codewars.com/kata/5266876b8f4bf2da9b000362/

from unittest import TestCase


def likes(input):
    switcher = {
        0: lambda names: "no one likes this",
        1: lambda names: f"{names[0]} likes this",
        2: lambda names: f"{names[0]} and {names[1]} like this",
        3: lambda names: f"{names[0]}, {names[1]} and {names[2]} like this",
    }
    default = lambda names: f"{names[0]}, {names[1]} and {len(names) - 2} others like this"

    return switcher.get(len(input), default)(input)


TestCase().assertEqual(likes([]), 'no one likes this')
TestCase().assertEqual(likes(['Peter']), 'Peter likes this')
TestCase().assertEqual(likes(['Jacob', 'Alex']), 'Jacob and Alex like this')
TestCase().assertEqual(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this')
TestCase().assertEqual(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this')
