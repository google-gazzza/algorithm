// https://www.codewars.com/kata/shortest-word/

const findShort = (s) => s.split(' ')
  .sort((a, b) => a.length - b.length)[0].length;

findShort("bitcoin take over the world maybe who knows perhaps");
//?
// 3

