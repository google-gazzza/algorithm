// [JS][7kyu] Alphabetical Sequence
// alphabetical-sequence
// https://www.codewars.com/kata/5bd00c99dbc73908bb00057a/train/javascript

const CHAR_CODE_OF_LOWER_A = 'a'.charCodeAt(0)
const getN = (str) => str.charCodeAt(0) - CHAR_CODE_OF_LOWER_A + 1
const getChar = (str) => `${str.toUpperCase()}${str.repeat(getN(str) - 1)}`
const alphaSeq = (str) =>
  (sortedStr = str
    .split('')
    .map((str) => str.toLowerCase())
    .sort()
    .map(getChar)
    .join(','))

alphaSeq('ZpglnRxqenU') ===
  'Eeeee,Ggggggg,Llllllllllll,Nnnnnnnnnnnnnn,Nnnnnnnnnnnnnn,Pppppppppppppppp,Qqqqqqqqqqqqqqqqq,Rrrrrrrrrrrrrrrrrr,Uuuuuuuuuuuuuuuuuuuuu,Xxxxxxxxxxxxxxxxxxxxxxxx,Zzzzzzzzzzzzzzzzzzzzzzzzzz'
alphaSeq('NyffsGeyylB') ===
  'Bb,Eeeee,Ffffff,Ffffff,Ggggggg,Llllllllllll,Nnnnnnnnnnnnnn,Sssssssssssssssssss,Yyyyyyyyyyyyyyyyyyyyyyyyy,Yyyyyyyyyyyyyyyyyyyyyyyyy,Yyyyyyyyyyyyyyyyyyyyyyyyy'
alphaSeq('MjtkuBovqrU') ===
  'Bb,Jjjjjjjjjj,Kkkkkkkkkkk,Mmmmmmmmmmmmm,Ooooooooooooooo,Qqqqqqqqqqqqqqqqq,Rrrrrrrrrrrrrrrrrr,Tttttttttttttttttttt,Uuuuuuuuuuuuuuuuuuuuu,Uuuuuuuuuuuuuuuuuuuuu,Vvvvvvvvvvvvvvvvvvvvvv'
alphaSeq('EvidjUnokmM') ===
  'Dddd,Eeeee,Iiiiiiiii,Jjjjjjjjjj,Kkkkkkkkkkk,Mmmmmmmmmmmmm,Mmmmmmmmmmmmm,Nnnnnnnnnnnnnn,Ooooooooooooooo,Uuuuuuuuuuuuuuuuuuuuu,Vvvvvvvvvvvvvvvvvvvvvv'
alphaSeq('HbideVbxncC') === 'Bb,Bb,Ccc,Ccc,Dddd,Eeeee,Hhhhhhhh,Iiiiiiiii,Nnnnnnnnnnnnnn,Vvvvvvvvvvvvvvvvvvvvvv,Xxxxxxxxxxxxxxxxxxxxxxxx'
