// [JS][7kyu] Row Weights
// row-weights
// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript

const rowWeights = (array) => {
  let odd = 0;
  let even = 0;
  array.forEach((weight, index) => {
    if (index % 2 === 0) {
      odd += weight;
    } else {
      even += weight;
    }
  });
  return [odd, even];
};

rowWeights([50, 60, 70, 80]);
rowWeights([50, 60, 70]);
rowWeights([50]);
rowWeights([]);
