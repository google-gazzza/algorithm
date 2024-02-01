# WeIrD StRiNg CaSe
# https://www.codewars.com/kata/52b757663a95b11b3d00062d/

from unittest import TestCase


def to_weird_case(string):
    def to_weird_string_case(word):
        return "".join(list(map(lambda v: v[1].upper() if v[0] % 2 == 0 else v[1].lower(), enumerate(list(word)))))

    return " ".join([to_weird_string_case(word) for word in string.split(" ")])


TestCase().assertEqual(to_weird_case('This'), 'ThIs')
TestCase().assertEqual(to_weird_case('is'), 'Is')
TestCase().assertEqual(to_weird_case('This is a test'), 'ThIs Is A TeSt')
