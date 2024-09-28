# how-much-water-do-i-need
# How much water do I need?
# difficulty: 8kyu
# https://www.codewars.com/kata/575fa9afee048b293e000287

def how_much_water(water, load, clothes):
    if load > clothes:
        return 'Not enough clothes'
    if load * 2 < clothes:
        return 'Too much clothes'

    return round(water * (1.1 ** abs(load - clothes)), 2)


from unittest import TestCase

TestCase().assertEqual(how_much_water(10, 10, 21), 'Too much clothes')
TestCase().assertEqual(how_much_water(10, 10, 2), 'Not enough clothes')
TestCase().assertEqual(how_much_water(10, 11, 20), 23.58)
TestCase().assertEqual(how_much_water(50, 15, 29), 189.87)
