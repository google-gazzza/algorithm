# https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

from unittest import TestCase


def duplicate_encode(word):
    lowered_word = word.lower()
    uniqList = list(set(lowered_word))
    dictionary = dict(zip(uniqList, [0] * len(uniqList)))

    for char in lowered_word:
        dictionary[char] += 1

    return "".join(['(' if dictionary[x] == 1 else ')' for x in lowered_word])


TestCase().assertEqual(duplicate_encode("din"), "(((")
TestCase().assertEqual(duplicate_encode("recede"), "()()()")
TestCase().assertEqual(duplicate_encode("Success"), ")())())", "should ignore case")
TestCase().assertEqual(duplicate_encode("(( @"), "))((")

# best practice in codewars
#
# def duplicate_encode(word):
#     return "".join(["(" if word.lower().count(c) == 1 else ")" for c in word.lower()])
