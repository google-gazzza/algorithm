// volume-of-a-cuboid
// Volume of a Cuboid
// https://www.codewars.com/kata/58261acb22be6e2ed800003a/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/8kyu/volume-of-a-cuboid

const Kata = {
  getVolumeOfCuboid: (length, width, height) => length * width * height
};



console.log(Kata.getVolumeOfCuboid(1, 2, 2), 4);
console.log(Kata.getVolumeOfCuboid(6.3, 2, 5), 63);
