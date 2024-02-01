# mexican-wave
# https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

from unittest import TestCase


def wave(people):
    result = []

    for i in range(0, len(people)):
        if people[i] != ' ':
            result.append(people[0:i] + people[i].upper() + people[i + 1::])

    return result


result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
TestCase().assertEqual(wave("hello"), result)

result = ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]
TestCase().assertEqual(wave("codewars"), result)

result = []
TestCase().assertEqual(wave(""), result)

result = ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]
TestCase().assertEqual(wave("two words"), result)

result = [" Gap ", " gAp ", " gaP "]
TestCase().assertEqual(wave(" gap "), result)
