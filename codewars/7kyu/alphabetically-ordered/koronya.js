// [JS][7kyu] Alphabetically ordered
// alphabetically-ordered
// https://www.codewars.com/kata/5a8059b1fd577709860000f6/train/javascript

const alphabetic = (s) => s === s.split('').sort().join('')

alphabetic('asd') === false
alphabetic('codewars') === false
alphabetic('door') === true
alphabetic('cell') === true
alphabetic('z') === true
alphabetic('') === true
