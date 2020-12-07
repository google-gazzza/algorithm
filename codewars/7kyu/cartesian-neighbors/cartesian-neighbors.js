/*
cartesian-neighbors
Cartesian neighbors
difficulty: 7kyu
https://www.codewars.com/kata/58989a079c70093f3e00008d/

approach.
this problem demand nearby coordinates.
so basically it has pattern

if input coordinates is 2,2
[
 [1,1][1,2][1,3]
 [2,1][2,2][2,3]
 [3,1][3,2][3,3]
]

and we can generalize those pattern to equation.
[
  [x-1, y-1], [x-1, y], [x-1, y+1],
  [x,   y-1], [x,     y], [x,   y+1],
  [x+1, y-1], [x+1, y], [x+1, y+1],
]

and once more, each row had pattern
[x-(row), y-1], [x-(row), y], [x-(row), y+1],

so if we generalize this pattern as a function generateCartesianRow
we can get result trough

    generateCartesianRow(x - 1, y),
    generateCartesianRow(x, y),
    generateCartesianRow(x + 1, y),
 
and just before return eliminate center coordinate.

 */

function generateCartesianRow(x, y) {
  return [
    [x, y - 1],
    [x, y],
    [x, y + 1],
  ];
}

function cartesianNeighbor(x, y) {
  return [
    ...generateCartesianRow(x - 1, y),
    ...generateCartesianRow(x, y),
    ...generateCartesianRow(x + 1, y),
  ].filter((e) => !(e[0] === x && e[1] === y));
}

console.log(cartesianNeighbor(2, 2));
//?
// , [[1, 1], [1, 2], [1, 3], [2, 1], [2, 3], [3, 1], [3, 2], [3, 3]];
