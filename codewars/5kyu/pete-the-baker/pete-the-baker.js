/*
pete-the-baker

# codewars/5kyu/Pete, the baker
Difficulty: 5kyu
URL: https://www.codewars.com/kata/525c65e51bf619685c000059/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function cakes(recipe, available) {
  return Math.min(
    ...(Object.entries(recipe)
      .map(([key, value]) => Math.floor(available[key] / value))),
  ) || 0;
}

// test
let recipe;
let available;

recipe = { flour: 500, sugar: 200, eggs: 1 };
available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
console.log(cakes(recipe, available), 2, 'Wrong result for example #1');

recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
available = { sugar: 500, flour: 2000, milk: 2000 };
console.log(cakes(recipe, available), 0, 'Wrong result for example #2');
