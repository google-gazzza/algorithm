// https://www.codewars.com/kata/5a651865fd56cb55760000e0

// Functional programming style
const arrayLeaders = (n, r = []) => (n.reduceRight((a, c) => (c > a ? r.unshift(c) : null, a + c), 0), r);


// declarative programming style
const arrayLeaders2 = (n) => {
  const result = [];
  n.reduceRight((a, c) => {
    if (c > a) {
      result.unshift(c);
    }
    return a + c;
  }, 0);
  return result;
};

console.log(arrayLeaders([1, 2, 3, 4, 0]), [4]);
console.log(arrayLeaders([16, 17, 4, 3, 5, 2]), [17, 5, 2]);
console.log(arrayLeaders([-1, -29, -26, -2]), [-1]);
console.log(arrayLeaders([-36, -12, -27]), [-36, -12]);
console.log(arrayLeaders([5, -2, 2]), [5, 2]);
// console.log(arrayLeaders([0, -1, -29, 3, 2]), [0, -1, 3, 2]);
