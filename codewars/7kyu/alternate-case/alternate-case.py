"""
alternate-case
codewars/7kyu/Alternate case
Difficulty: 7kyu
URL: https://www.codewars.com/kata/57a62154cf1fa5b25200031e/
"""

def alternate_case(s):
    def swap_case(char):
        if char.islower():
            return char.upper()
        return char.lower()

    return ''.join([swap_case(char) for char in list(s)])


def alternateCase(s):
    return s.swapcase()


def test_alternative_case():
    assert alternate_case("ABC") == "abc"
    assert alternate_case("") == ""
    assert alternate_case(" ") == " "
    assert alternate_case("Hello World") == "hELLO wORLD"
    assert alternate_case("cODEwARS") == "CodeWars"
    assert alternate_case("i LIKE MAKING KATAS VERY MUCH") == "I like making katas very much"
