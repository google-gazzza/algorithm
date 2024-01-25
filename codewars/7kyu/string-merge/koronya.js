// [JS][7kyu] String Merge!
// string-merge
// https://www.codewars.com/kata/597bb84522bc93b71e00007e/train/javascript

const stringMerge = (string1, string2, letter) => `${string1.substring(0, string1.indexOf(letter))}${string2.substring(string2.indexOf(letter))}`

stringMerge('person', 'here', 'e') === 'pere'
stringMerge('apowiejfoiajsf', 'iwahfeijouh', 'j') === 'apowiejouh'
stringMerge('abcdefxxxyzz', 'abcxxxyyyxyzz', 'x') === 'abcdefxxxyyyxyzz'
stringMerge('12345654321', '123456789', '6') === '123456789'
stringMerge('JiOdIdA4', 'oopopopoodddasdfdfsd', 'd') === 'JiOdddasdfdfsd'
stringMerge('incredible', 'people', 'e') === 'increople'
