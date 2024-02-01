// build-a-pile-of-cubes
// https://www.codewars.com/kata/5592e3bd57b64d00f3000047


const findNb = (m, n = 1, nsum = 0, sum = 0) => {
  if (m === sum) {
    return n - 1;
  }
  if (m < sum) {
    return -1;
  }
  
  return findNb(m, n + 1, nsum + n, sum + n ** 3);
};

console.log(findNb(4183059834009), 2022);
console.log(findNb(24723578342962), -1);
console.log(findNb(135440716410000), 4824);
console.log(findNb(40539911473216), 3568);
