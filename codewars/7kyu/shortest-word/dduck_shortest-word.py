# https://www.codewars.com/kata/shortest-word/

find_short = lambda s: len(sorted(s.split(), key=len)[0])

print(find_short("bitcoin take over the world maybe who knows perhaps"))
#
#
# const findShort = (s) => s.split(' ')
#   .sort((a, b) => a.length - b.length)[0].length;
#
# findShort("bitcoin take over the world maybe who knows perhaps");
# //?
# // 3
