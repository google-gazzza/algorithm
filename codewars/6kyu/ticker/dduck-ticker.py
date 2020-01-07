# https://www.codewars.com/kata/ticker/train/javascript

import unittest


def get_ticker(text, width, tick, count):
    if count == 0:
        return text[0:width]

    return get_ticker(text[1:] + text[0], width, tick, count - 1)


def ticker(text, width, tick):
    text = "".rjust(width) + text
    quotient = tick // len(text)
    remainder = tick % len(text)
    target_tick = tick if quotient == 0 else remainder

    return get_ticker(text, width, target_tick, target_tick)


unittest.TestCase().assertEqual(ticker("Beautiful is better than ugly.", 10, 0), "          ")
unittest.TestCase().assertEqual(ticker("Beautiful is better than ugly.", 10, 5), "     Beaut")
unittest.TestCase().assertEqual(ticker("Beautiful is better than ugly.", 10, 30), "than ugly.")
unittest.TestCase().assertEqual(ticker("Beautiful is better than ugly.", 10, 39), ".         ")
unittest.TestCase().assertEqual(ticker("Beautiful is better than ugly.", 10, 41), "         B")

unittest.TestCase().assertEqual("test-string", "test-some-string")

"""
beat practice in codewars

def ticker(text, width, tick):
    tick %= len(text) + width
    text = ' ' * width + text + ' ' * width
    return text[tick :  tick + width]
"""
