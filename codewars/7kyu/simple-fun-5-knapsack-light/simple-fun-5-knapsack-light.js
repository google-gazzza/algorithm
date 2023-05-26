/*
simple-fun-5-knapsack-light

# codewars/7kyu/Simple Fun #5: Knapsack Light
Difficulty: 7kyu
URL: https://www.codewars.com/kata/58842a2b4e8efb92b7000080

## Approach

### en

### kr

## Solution
### JavaScript

*/

function knapsackLight(value1, weight1, value2, weight2, maxW) {
  let totalWeight = 0;
  const bag = [];
  const list = [[value1, weight1], [value2, weight2]];
  
  if (list[0][1] <= maxW) {
    bag.push(list.shift());
    totalWeight += bag[0][1];
  } else if (list[1][1] <= maxW) {
    bag.push(list.pop());
    totalWeight += bag[0][1];
  }
  
  if (totalWeight + list[0][1] <= maxW) {
    bag.push(list.pop());
  } else if (list[0][1] <= maxW && bag[0][0] <= list[0][0]) {
    bag.pop();
    bag.push(list.pop());
  }
  
  return bag.reduce((acc, cur) => acc + cur[0], 0);
}

// test
console.log(knapsackLight(10, 5, 6, 4, 8), 10);
console.log(knapsackLight(10, 5, 6, 4, 9), 16);
console.log(knapsackLight(10, 2, 11, 3, 1), 0);
console.log(knapsackLight(15, 2, 20, 3, 2), 15);
console.log(knapsackLight(2, 5, 3, 4, 5), 3);
console.log(knapsackLight(4, 3, 3, 4, 4), 4);
console.log(knapsackLight(3, 5, 3, 8, 10), 3);
