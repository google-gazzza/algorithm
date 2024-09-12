// [JS][7kyu] Love vs friendship
// love-vs-friendship
// https://www.codewars.com/kata/59706036f6e5d1e22d000016/train/javascript

const CHARCODE_OF_LOWER_A = 'a'.charCodeAt(0)

const getCharCode = (char) => char.charCodeAt(0) - CHARCODE_OF_LOWER_A + 1

const wordsToMarks = (string) => string.split('').reduce((acc, cur) => acc + getCharCode(cur), 0)

wordsToMarks('attitude')
wordsToMarks('friends')
wordsToMarks('family')
wordsToMarks('selfness')
wordsToMarks('knowledge')
