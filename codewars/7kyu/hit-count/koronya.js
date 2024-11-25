// [JS][7kyu] Hit Count
// hit-count
// https://www.codewars.com/kata/57b6f850a6fdc76523001162/train/javascript

const counterEffect = (hitCount) => hitCount.split('').map((char) => Array.from({ length: parseInt(char, 10) + 1 }, (_, i) => i))

counterEffect('1250')
