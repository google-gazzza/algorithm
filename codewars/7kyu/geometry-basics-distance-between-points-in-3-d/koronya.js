// [JS][7kyu] Geometry Basics: Distance between points in 3D
// geometry-basics-distance-between-points-in-3-d
// https://www.codewars.com/kata/58dceee2c9613aacb40000b9/train/javascript

const distanceBetweenPoints = (a, b) => Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2) + Math.pow(a.z - b.z, 2))
const distanceBetweenPoints2 = (a, b) => Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z)
