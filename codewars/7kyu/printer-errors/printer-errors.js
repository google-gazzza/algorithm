/*
printer-errors

# codewars/7kyu/Printer Errors
Difficulty: 7kyu
URL: https://www.codewars.com/kata/56541980fa08ab47a0000040

## Approach

### en

### kr

## Solution
### JavaScript

*/

const printerError = (s) => `${s.length - s.match(/[a-m]/g).length}/${s.length}`;

const s = 'aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz';
console.log(printerError(s), '3/56');
