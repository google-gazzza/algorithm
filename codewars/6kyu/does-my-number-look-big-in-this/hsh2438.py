# https://www.codewars.com/kata/5287e858c6b5a9678200083c

def narcissistic( value ):
    str_value = str(value)
    multi = len(str_value)

    num = 0
    for str_digit in str_value:
        num += int(str_digit)**multi

    return num == value
