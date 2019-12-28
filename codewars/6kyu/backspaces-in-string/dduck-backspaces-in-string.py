# https://www.codewars.com/kata/backspaces-in-string/


def clean_string(s='', position=0):
    if position >= len(s):
        return s

    if s[position] != '#':
        return clean_string(s, position + 1)

    return clean_string(s[:max(0, position - 1)] + s[position + 1:], max(0, position - 1))


print(clean_string('abc#d##c'), "ac")
print(clean_string('abc####d##c#'), "?")
print(clean_string("#######"), "?")
print(clean_string(""), "?")
print(-1 or 0)
