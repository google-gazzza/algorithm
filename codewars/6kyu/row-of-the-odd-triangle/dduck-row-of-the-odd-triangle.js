// row-of-the-odd-triangle
// Row of the odd triangle
// difficulty: 6kyu
// https://www.codewars.com/kata/5d5a7525207a674b71aa25b5
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/6kyu/row-of-the-odd-triangle

const getRowStartNum = (n) => {
  let sum = 1;
  let step = 1;
  
  while (step < n) {
    step += 1;
    sum += (step - 1) * 2;
  }
  
  return sum;
};

const oddRow = (n) => new Array(n).fill(getRowStartNum(n))
  .map((v, i) => v + i * 2);



console.log(oddRow(1), [1]);
console.log(oddRow(2), [3, 5]);
console.log(oddRow(13), [157, 159, 161, 163, 165, 167, 169, 171,
  173, 175, 177, 179, 181]);
console.log(oddRow(19), [343, 345, 347, 349, 351, 353, 355, 357,
  359, 361, 363, 365, 367, 369, 371, 373, 375, 377, 379]);
console.log(oddRow(41), [1641, 1643, 1645, 1647, 1649, 1651, 1653,
  1655, 1657, 1659, 1661, 1663, 1665, 1667, 1669, 1671, 1673, 1675, 1677,
  1679, 1681, 1683, 1685, 1687, 1689, 1691, 1693, 1695, 1697, 1699, 1701,
  1703, 1705, 1707, 1709, 1711, 1713, 1715, 1717, 1719, 1721]);
