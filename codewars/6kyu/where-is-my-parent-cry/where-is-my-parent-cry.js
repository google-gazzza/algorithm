/*
where-is-my-parent-cry

# codewars/6kyu/Where is my parent!?(cry)
Difficulty: 6kyu
URL: https://www.codewars.com/kata/58539230879867a8cd00011c/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function findChildren(dancingBrigade) {
  return [...dancingBrigade].sort((a, b) => {
    if (a.toLowerCase() === b.toLowerCase()) {
      return b.localeCompare(a);
    }
    return a.localeCompare(b);
  }).join('');
}

// test
console.log("BbbEeee" == findChildren("beeeEBb"));
console.log("EeeUuuWww" == findChildren("uwwWUueEe"));
