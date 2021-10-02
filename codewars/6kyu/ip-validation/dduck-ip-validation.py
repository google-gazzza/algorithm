# ip-validation
# https://www.codewars.com/kata/515decfd9dcfc23bb6000006

from unittest import TestCase


def is_valid_IP(strng):
    def is_ip_range(x):
        if x.isdigit() == True:
            parsed_num = int(x)
            return str(parsed_num) == x and 0 <= parsed_num <= 255
        return False

    return len(list(filter(lambda x: is_ip_range(x), strng.split(".")))) == 4


TestCase().assertEqual(is_valid_IP('12.255.56.1'), True)
TestCase().assertEqual(is_valid_IP(''), False)
TestCase().assertEqual(is_valid_IP('abc.def.ghi.jkl'), False)
TestCase().assertEqual(is_valid_IP('123.456.789.0'), False)
TestCase().assertEqual(is_valid_IP('12.34.56'), False)
TestCase().assertEqual(is_valid_IP('12.34.56 .1'), False)
TestCase().assertEqual(is_valid_IP('12.34.56.-1'), False)
TestCase().assertEqual(is_valid_IP('123.045.067.089'), False)
TestCase().assertEqual(is_valid_IP('127.1.1.0'), True)
TestCase().assertEqual(is_valid_IP('0.0.0.0'), True)
TestCase().assertEqual(is_valid_IP('0.34.82.53'), True)
TestCase().assertEqual(is_valid_IP('192.168.1.300'), False)
