/*
simple-fun-189-plant-doubling

# codewars/7kyu/Simple Fun #189: Plant Doubling
Difficulty: 7kyu
URL: https://www.codewars.com/kata/58bf97cde4a5edfd4f00008d/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function plantDoubling(n) {
  let plantCount = 0;
  let trees = 1;
  
  while (n > 0) {
    plantCount += 1;
    
    trees = 1;
    
    while (trees * 2 <= n) {
      trees *= 2;
    }
    n -= trees;
  }
  
  return plantCount;
}

// test
console.log(plantDoubling(5), 2);
console.log(plantDoubling(8), 1);
console.log(plantDoubling(536870911), 29);
console.log(plantDoubling(1), 1);
