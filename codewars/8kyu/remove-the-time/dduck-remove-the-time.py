# remove-the-time
# algorithm-breaking/codewars/8kyu/remove-the-time
# Remove the time
# https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e
# https://algorithm-breaking.blogspot.com/2020/09/algorithm-breakingcodewars8kyuremove.html

def shorten_to_date(long_date):
    return long_date[0:long_date.index(',')]


from unittest import TestCase

TestCase().assertEqual(shorten_to_date("Monday February 2, 8pm"), "Monday February 2")
TestCase().assertEqual(shorten_to_date("Tuesday May 29, 8pm"), "Tuesday May 29")
TestCase().assertEqual(shorten_to_date("Wed September 1, 3am"), "Wed September 1")
TestCase().assertEqual(shorten_to_date("Friday May 2, 9am"), "Friday May 2")
TestCase().assertEqual(shorten_to_date("Tuesday January 29, 10pm"), "Tuesday January 29")
