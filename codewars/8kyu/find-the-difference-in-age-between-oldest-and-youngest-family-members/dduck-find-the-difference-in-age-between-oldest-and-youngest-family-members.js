// find-the-difference-in-age-between-oldest-and-youngest-family-members
// Find the Difference in Age between Oldest and Youngest Family Members
// https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/

const differenceInAges = (ages) => {
  ages.sort((a, b) => a - b);
  
  return [ages[0], ages[ages.length - 1], ages.pop() - ages.shift()];
};



console.log(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
console.log(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);
