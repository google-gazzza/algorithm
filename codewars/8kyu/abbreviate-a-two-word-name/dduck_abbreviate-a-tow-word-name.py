# https://www.codewars.com/kata/abbreviate-a-two-word-name/


def abbrevName(name):
    return '.'.join([x[0].upper() for x in list(name.split())])

print(abbrevName("Sam Harris"))
# , "S.H"
