// https://www.codewars.com/kata/55b1fd84a24ad00b32000075/

from unittest import TestCase


def am_I_afraid(day, num):
    days = {
        "Monday": lambda n: n == 12,
        "Tuesday": lambda n: n > 95,
        "Wednesday": lambda n: n == 34,
        "Thursday": lambda n: n == 0,
        "Friday": lambda n: n % 2 == 0,
        "Saturday": lambda n: n == 56,
        "Sunday": lambda n: n == 666 or n == -666,
    }
    return days[day](num)


TestCase().assertEqual(am_I_afraid("Monday", 13), False, 'Should return false')
TestCase().assertEqual(am_I_afraid("Sunday", -666), True, 'Should return true')
TestCase().assertEqual(am_I_afraid("Tuesday", 2), False, 'Should return false')
TestCase().assertEqual(am_I_afraid("Tuesday", 965), True, 'Should return true')
TestCase().assertEqual(am_I_afraid("Friday", 2), True, 'Should return true')
