# human-readable-duration-format
# https://www.codewars.com/kata/52742f58faf5485cae000b9a/


from unittest import TestCase

from collections import OrderedDict


def format_duration(seconds):
    if seconds == 0:
        return 'now'

    times = OrderedDict(
        second=(1, 60),
        minute=(60, 60),
        hour=(3600, 24),
        day=((3600 * 24), 365),
        year=(3600 * 24 * 365, 0)
    )

    result = []
    for key, v in times.items():
        value = seconds // v[0]
        if v[1]:
            value %= v[1]
        if value > 1:
            result.append(f'{value} {key}s')
        elif value == 1:
            result.append(f'{value} {key}')
    result.reverse()

    if len(result) > 1:
        return ", ".join(result[0:len(result) - 1:]) + " and " + result[-1]

    return result[0]


TestCase().assertEqual(format_duration(1), "1 second")
TestCase().assertEqual(format_duration(62), "1 minute and 2 seconds")
TestCase().assertEqual(format_duration(120), "2 minutes")
TestCase().assertEqual(format_duration(3600), "1 hour")
TestCase().assertEqual(format_duration(3662), "1 hour, 1 minute and 2 seconds")
TestCase().assertEqual(format_duration(15731080), "182 days, 1 hour, 44 minutes and 40 seconds")
