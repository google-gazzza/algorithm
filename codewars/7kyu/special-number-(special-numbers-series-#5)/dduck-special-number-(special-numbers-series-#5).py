# https://www.codewars.com/kata/5a55f04be6be383a50000187/


from unittest import TestCase


def special_number(number):
    if len(str(number)) == sum([int(x) < 6 for x in str(number)]):
        return "Special!!"
    return "NOT!!"


TestCase().assertEqual(special_number(2), "Special!!")
TestCase().assertEqual(special_number(5), "Special!!")
TestCase().assertEqual(special_number(9), "NOT!!")
TestCase().assertEqual(special_number(7), "NOT!!")
TestCase().assertEqual(special_number(23), "Special!!")
TestCase().assertEqual(special_number(79), "NOT!!")
TestCase().assertEqual(special_number(39), "NOT!!")
TestCase().assertEqual(special_number(55), "Special!!")
TestCase().assertEqual(special_number(513), "Special!!")
TestCase().assertEqual(special_number(709), "NOT!!")
TestCase().assertEqual(special_number(970569), "NOT!!")
TestCase().assertEqual(special_number(11350224), "Special!!")
# const specialNumber = (n) => (
#   String(n)
#     .split('')
#     .map(Number)
#     .every((v) => v < 6)
#     ? 'Special !!' : 'NOT !!'
# );
#
# console.log(specialNumber(2), 'Special!!');
# console.log(specialNumber(3), 'Special!!');
# console.log(specialNumber(6), 'NOT!!');
# console.log(specialNumber(9), 'NOT!!');
# console.log(specialNumber(11), 'Special!!');
# console.log(specialNumber(55), 'Special!!');
# console.log(specialNumber(26), 'NOT!!');
# console.log(specialNumber(92), 'NOT!!');
# console.log(specialNumber(25432), 'Special!!');
# console.log(specialNumber(2783), 'NOT!!');
