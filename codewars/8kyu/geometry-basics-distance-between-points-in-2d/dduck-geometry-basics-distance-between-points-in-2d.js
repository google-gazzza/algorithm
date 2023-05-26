// geometry-basics-distance-between-points-in-2d
// Geometry Basics: Distance between points in 2D
// https://www.codewars.com/kata/58dced7b702b805b200000be
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/geometry-basics-distance-between-points-in-2d

const distanceBetweenPoints = (a, b) => {
  return Math.sqrt(Math.abs(a.x - b.x) ** 2 + Math.abs(a.y - b.y) ** 2);
};

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}



// best practice on codewars
// function distanceBetweenPoints(a, b) {
//   return Math.hypot(a.x - b.x, a.y - b.y);
// }



console.log(distanceBetweenPoints(new Point(3, 3), new Point(3, 3)), 0);
console.log(distanceBetweenPoints(new Point(1, 6), new Point(4, 2)), 5);
console.log(distanceBetweenPoints(new Point(-10.2, 12.5), new Point(0.3, 14.7)).toFixed(6), 10.728001);
