/**
 * @param {number[]} height
 * @return {number}
 * Runtime : 87 ms Beats 70.69%
 * Memory : 49.2 MB Beats : 79.80%
 */
var maxArea = function (height) {
  let amount = 0,
    answer = 0;
  let i = 0,
    j = height.length - 1;
  while (i < j) {
    let heightI = height[i],
      heightJ = height[j];
    amount = Math.min(heightI, heightJ) * Math.abs(i - j);

    if (answer < amount) {
      answer = amount;
    }
    if (heightI < heightJ) {
      i++;
    } else if (heightI > heightJ) {
      j--;
    } else if (heightI === heightJ) {
      i++;
      j--;
    }
  }
  return answer;
};
