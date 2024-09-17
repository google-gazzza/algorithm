
# codewars/4kyu/Most frequently used words in a text
# most-frequently-used-words-in-a-text
# URL: https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/python
#
# NOTE: Description
# NOTE: Constraints
# NOTE: Explanation
# NOTE: Reference
from collections import Counter


def is_character(text: str):
    return text.isalpha() or text == "'" or text == " "


def sanitizing_text(text: str):
    text = text.lower()
    new_text = []

    for i in range(len(text)):
        if is_character(text[i]):
            new_text.append(text[i])
        else:
            new_text.append(" ")

    new_text = "".join(new_text).split(" ")

    return new_text


def filtering_empty_string(str_list: list[[str, int]]):
    return list(filter(lambda x: x[0] != "", str_list))


def is_all_apostrophe(text: str):
    for i in range(len(text)):
        if text[i] != "'":
            return False

    return True


def filtering_apostrophes(str_list: list[[str, int]]):
    result = []

    for word in str_list:
        if not is_all_apostrophe(word[0]):
            result.append(word)

    return result


def top_3_words(text):
    count = Counter(sanitizing_text(text))
    count = list(count.items())

    count.sort(key=lambda x: x[1], reverse=True)
    result_candidate = filtering_apostrophes(count)
    result_candidate = filtering_empty_string(result_candidate)

    return [x[0] for x in result_candidate[:3]]


assert top_3_words("a a a  b  c c  d d d d  e e e e e") == ["e", "d", "a"]
assert top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e") == ["e", "ddd", "aa"]
assert top_3_words("  //wont won't won't ") == ["won't", "wont"]
assert top_3_words("  , e   .. ") == ["e"]
assert top_3_words("  ...  ") == []
assert top_3_words("  '  ") == []
assert top_3_words("  '''  ") == []
