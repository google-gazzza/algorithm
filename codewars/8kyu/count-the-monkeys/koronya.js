// [JS][8kyu] Count the Monkeys!
// count-the-monkeys
// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/train/javascript

const monkeyCount = (n) => Array.from({ length: n }).map((_, index) => index + 1)

monkeyCount(5)
monkeyCount(3)
