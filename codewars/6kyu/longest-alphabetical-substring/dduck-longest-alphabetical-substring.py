# https:#www.codewars.com/kata/longest-alphabetical-substring

def longest(input):
    characters = list(map(lambda i: i, input))
    longest_aphabetical_string = alphabetical_string = characters[0] if len(characters) > 0 else ""

    for index, val in enumerate(characters):
        if ((index > 0) and (ord(characters[index]) >= ord(characters[index - 1]))):
            alphabetical_string += val
            if (len(alphabetical_string) > len(longest_aphabetical_string)):
                longest_aphabetical_string = alphabetical_string
        else:
            alphabetical_string = val

    return longest_aphabetical_string;


# print(longest('asd'))
# ?
# , 'as');
# print(longest('nab'))
# # ?
# # #, 'ab');
# print(longest('abcdeapbcdef'))
# # ?
# # # , 'abcde');
# print(longest('asdfaaaabbbbcttavvfffffdf'))
# # ?
# # #, 'aaaabbbbctt');
# print(longest('asdfbyfgiklag'))
# # ?
# # # , 'fgikl');
# # print(longest('z');
# # #?
# # #, 'z');
print(longest('zyba'))
# ?
# , 'z');
