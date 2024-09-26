# Good vs Evil
# https://www.codewars.com/kata/52761ee4cffbc69732000738

from unittest import TestCase

good_values = [1, 2, 3, 3, 4, 10]
evil_values = [1, 2, 2, 2, 3, 5, 10]


def evaluating(counts, target_values):
    return sum([target_values[v[0]] * int(v[1]) for v in enumerate(counts.split(" "))])


def goodVsEvil(good, evil):
    good_sum = evaluating(good, good_values)
    evil_sum = evaluating(evil, evil_values)

    result = "No victor on this battle field"
    if good_sum > evil_sum:
        result = "Good triumphs over Evil"
    elif good_sum < evil_sum:
        result = "Evil eradicates all trace of Good"

    return f"Battle Result: {result}"


TestCase().assertEqual(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'),
                       'Battle Result: Evil eradicates all trace of Good', 'Evil should win')
TestCase().assertEqual(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'), 'Battle Result: Good triumphs over Evil',
                       'Good should win')
TestCase().assertEqual(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'), 'Battle Result: No victor on this battle field',
                       'Should be a tie')
