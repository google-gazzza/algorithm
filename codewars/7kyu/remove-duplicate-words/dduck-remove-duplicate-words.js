// https://www.codewars.com/kata/5b39e3772ae7545f650000fc

const dduckRemoveDuplicateWords = (s) => Array.from(new Set(s.split(' '))).join(' ');

console.log(dduckRemoveDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), 'alpha beta gamma delta');
