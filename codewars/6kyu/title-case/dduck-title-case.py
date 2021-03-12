# title case
# https://www.codewars.com/kata/5202ef17a402dd033c000009

from unittest import TestCase


def title_case(title, minor_words=""):
    minor_words_lower = minor_words.lower().split(" ")
    result = " ".join(
        list(
            map(lambda word: word if word in minor_words_lower else word.capitalize(), title.lower().split(" "))
        )
    )

    return result[0].upper() + result[1::] if len(result) > 0 else ""


TestCase().assertEqual(title_case(''), '')
TestCase().assertEqual(title_case('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
TestCase().assertEqual(title_case('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows')
TestCase().assertEqual(title_case('the quick brown fox'), 'The Quick Brown Fox')
