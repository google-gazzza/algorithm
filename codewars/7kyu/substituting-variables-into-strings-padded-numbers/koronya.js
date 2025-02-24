// [JS][7kyu] Substituting Variables Into Strings: Padded Numbers
// substituting-variables-into-strings-padded-numbers
// https://www.codewars.com/kata/51c89385ee245d7ddf000001/train/javascript

const solution = (value) => `Value is ${String(value).padStart(5, '0')}`

solution(5) === 'Value is 00005'
solution(1204) === 'Value is 01204'
solution(109) === 'Value is 00109'
solution(0) === 'Value is 00000'
