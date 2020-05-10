# https://www.codewars.com/kata/59cfc000aeb2844d16000075/

from unittest import TestCase


def capitalize(s):
    result = [[], []]
    for i, v in enumerate(s):
        result[i % 2].append(v.upper())
        result[((i % 2) + 1) % 2].append(v)

    return ["".join(result[0]), "".join(result[1])]


TestCase().assertEqual(capitalize("abcdef"), ['AbCdEf', 'aBcDeF'])
TestCase().assertEqual(capitalize("codewars"), ['CoDeWaRs', 'cOdEwArS'])
TestCase().assertEqual(capitalize("abracadabra"), ['AbRaCaDaBrA', 'aBrAcAdAbRa'])
TestCase().assertEqual(capitalize("codewarriors"), ['CoDeWaRrIoRs', 'cOdEwArRiOrS'])
