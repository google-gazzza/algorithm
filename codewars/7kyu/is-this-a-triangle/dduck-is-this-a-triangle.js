// is-this-a-triangle
// Is this a triangle?
// difficulty: 7kyu
// https://www.codewars.com/kata/56606694ec01347ce800001b
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/7kyu/is-this-a-triangle

const isTriangle = (...sides) => {
  sides.sort((a, b) => b - a);
  return sides[0] < sides[1] + sides[2];
};



console.log(isTriangle(1, 2, 2), true);
console.log(isTriangle(7, 2, 2), false);
