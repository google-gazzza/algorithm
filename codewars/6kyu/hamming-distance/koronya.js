// [JS][6kyu] Hamming Distance
// hamming-distance
// https://www.codewars.com/kata/5410c0e6a0e736cf5b000e69/train/javascript

const hamming = (a, b) => a.split('').reduce((acc, cur, index) => (cur === b[index] ? acc : acc + 1), 0)

hamming('I like turtles', 'I like turkeys') === 3
hamming('Hello World', 'Hello World') === 0
hamming('hello world', 'hello tokyo') === 4
hamming('a man a plan a canal', 'a man a plan sobanal') === 3
hamming('hamming and cheese', 'Hamming and Cheese') === 2
hamming('espresso', 'Expresso') === 2
hamming('old father, old artificer', 'of my soul the uncreated ') === 24
