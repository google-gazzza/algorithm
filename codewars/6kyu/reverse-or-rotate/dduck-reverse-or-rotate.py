# reverse-or-rotate
# https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991

from unittest import TestCase


def revrot(strng, sz):
    result = ""
    string = strng

    if sz < 1 or len(strng) < 1:
        return result

    while len(string) >= sz:
        chunk = string[0:sz]
        if sum(map(int, list(chunk))) % 2 == 0:
            chunk = chunk[::-1]
        else:
            chunk = chunk[1::] + chunk[0]
        result += chunk
        string = string[sz::]

    return result


TestCase().assertEqual(revrot("123456987654", 6), "234561876549")
TestCase().assertEqual(revrot("123456987653", 6), "234561356789")
TestCase().assertEqual(revrot("66443875", 4), "44668753")
TestCase().assertEqual(revrot("66443875", 8), "64438756")
TestCase().assertEqual(revrot("664438769", 8), "67834466")
TestCase().assertEqual(revrot("123456779", 8), "23456771")
TestCase().assertEqual(revrot("", 8), "")
TestCase().assertEqual(revrot("123456779", 0), "")
TestCase().assertEqual(revrot("563000655734469485", 4), "0365065073456944")
