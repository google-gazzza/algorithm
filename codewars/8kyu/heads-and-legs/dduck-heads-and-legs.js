// heads-and-legs
// Heads and Legs
// difficulty: 8kyu
// https://www.codewars.com/kata/574c5075d27783851800169e

const animals = (heads, legs) => {
  const result = [heads - ((legs / 2) - heads), legs / 2 - heads];
  return legs % 2 === 1 || result.some((e) => e < 0) ? 'No solutions' : result;
};



console.log(animals(72, 200), [44, 28]);
console.log(animals(116, 282), [91, 25]);
console.log(animals(12, 24), [12, 0]);
console.log(animals(6, 24), [0, 6]);
console.log(animals(344, 872), [252, 92]);
console.log(animals(158, 616), [8, 150]);
