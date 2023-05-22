// [JS][7kyu] Remove duplicate words
// remove-duplicate-words
// https://www.codewars.com/kata/5b39e3772ae7545f650000fc/train/javascript

const removeDuplicateWords = (s) => [...new Set(s.split(' '))].join(' ')

removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta') === 'alpha beta gamma delta'
removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')
