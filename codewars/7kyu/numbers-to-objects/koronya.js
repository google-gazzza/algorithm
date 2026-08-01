// [JS][7kyu] Numbers to Objects
// numbers-to-objects
// https://www.codewars.com/kata/57ced2c1c6fdc22123000316/train/javascript

const numObj = (s) => s.map((item) => ({ [item]: String.fromCharCode(item) }))

numObj([118, 117, 120])
numObj([101, 121, 110, 113, 113, 103])
