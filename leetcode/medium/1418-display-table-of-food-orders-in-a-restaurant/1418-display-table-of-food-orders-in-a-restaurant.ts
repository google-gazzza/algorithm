/*
# leetcode/medium/1418. Display Table of Food Orders in a Restaurant
# 1418-display-table-of-food-orders-in-a-restaurant
# URL: https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function displayTable(orders: string[][]): string[][] {
  const tableNameSet = new Set();
  const foodNamesWithIndexMap = new Map();
  const reverseFoodNamesWithIndexMap = new Map();
  const foodCountArray = [];

  for (let i = 0; i < orders.length; i += 1) {
    const [_, table, food] = orders[i];
    tableNameSet.add(table);

    // NOTE: foodNamesWithIndexMap will decide which index of foodCountArray
    if (!foodNamesWithIndexMap.has(food)) {
      foodNamesWithIndexMap.set(food, foodNamesWithIndexMap.size);
      reverseFoodNamesWithIndexMap.set(foodNamesWithIndexMap.size - 1, food);
      foodCountArray[foodNamesWithIndexMap.get(food)] = [];
    }

    foodCountArray[foodNamesWithIndexMap.get(food)].push(table);
  }

  const tableNamesArray: string[] = Array.from(tableNameSet)
    .sort((a, b) => Number(a) - Number(b))
    .map((table) => String(table));
  // const foodNamesArray: string[] = Array.from(foodNamesWithIndexMap.keys()).sort((a, b) => a.localeCompare(b));
  const foodNamesArray: string[] = Array.from(foodNamesWithIndexMap.keys()).sort();
  let result: string[][] = [];

  result[0] = ['Table', ...foodNamesArray];

  for (let i = 0; i < tableNamesArray.length; i += 1) {
    const temp = new Array(foodNamesArray.length + 1).fill(0);
    temp[0] = tableNamesArray[i];
    result.push(temp);
  }

  foodCountArray.forEach((foodTableNumbers, index) => {
    const foodName = reverseFoodNamesWithIndexMap.get(index);
    const targetFoodColumnIndex = foodNamesArray.indexOf(foodName) + 1;

    foodTableNumbers.forEach((tableNumber) => {
      const targetTableIndex = tableNamesArray.indexOf(tableNumber);
      result[targetTableIndex + 1][targetFoodColumnIndex] += 1;
    });
  });

  result = result.map((row) => row.map((cell) => String(cell)));

  return result;
}

let orders = [
  ['David', '3', 'Ceviche'], ['Corina', '10', 'Beef Burrito'], ['David', '3', 'Fried Chicken'], ['Carla', '5', 'Water'], ['Carla', '5', 'Ceviche'], ['Rous', '3', 'Ceviche']];

console.log(displayTable(orders));
// Output = [
//   ['Table', 'Beef Burrito', 'Ceviche', 'Fried Chicken', 'Water'],
//   ['3', '0', '2', '1', '0'],
//   ['5', '0', '1', '0', '1'],
//   ['10', '1', '0', '0', '0'],
// ];
