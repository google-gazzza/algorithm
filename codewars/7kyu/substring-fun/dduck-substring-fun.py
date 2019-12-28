# https://www.codewars.com/kata/substring-fun/train/javascript

nth_char = lambda words: "".join([words[i][i] for i in range(len(words))])

# const nth_char = (strArr, str = '', count = 0) => {
#   return strArr.length ? nthChar(strArr, str += strArr.shift()[count] || '', count + 1) : str;
# };

print(nth_char(['yoda', 'best', 'has']))
# 'yes');
# print(nth_char(['']))
