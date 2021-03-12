# CamelCase Method
# https://www.codewars.com/kata/587731fda577b3d1b0001196/

from unittest import TestCase


def camel_case(string):
    return "".join([word[0].upper() + word[1::] if len(word) else "" for word in string.split(" ")])

# best practice in CodeWars
# def camel_case(string):
#     return string.title().replace(" ", "")

TestCase().assertEqual(camel_case("test case"), "TestCase")
TestCase().assertEqual(camel_case("camel case method"), "CamelCaseMethod")
TestCase().assertEqual(camel_case("say hello "), "SayHello")
TestCase().assertEqual(camel_case(" camel case word"), "CamelCaseWord")
TestCase().assertEqual(camel_case(""), "")
