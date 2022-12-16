/*
2079-watering-plants
leetcode/medium/2079. Watering Plants
URL: https://leetcode.com/problems/watering-plants/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function wateringPlants(plants: number[], capacity: number): number {
  let steps = 0;
  let remaining = capacity;

  for (let i = 0; i < plants.length; i += 1) {
    steps += 1;

    if (plants[i] > remaining) {
      steps += i * 2;
      remaining = capacity;
    }

    if (plants[i] <= remaining) {
      [remaining, plants[i]] = [remaining - plants[i], 0];
    }
  }

  return steps;
}

let plants = [2, 2, 3, 3];
let capacity = 5;
console.log(wateringPlants(plants, capacity));
// Output: 14
