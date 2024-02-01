// https://www.codewars.com/kata/56efab15740d301ab40002ee

const gcdi = (a, b) => (b === 0 ? Math.abs(a) : gcdi(b, a % b));
const lcmu = (a, b) => Math.abs(a * b) / gcdi(a, b);
const som = (a, b) => a + b;
const maxi = (a, b) => Math.max(a, b);
const mini = (a, b) => Math.min(a, b);

const operArray = (fct, arr, init) => {
  console.log(fct, arr, init);
  const result = [];
  arr.reduce((a, c) => {
    const temp = fct(a, c);
    result.push(temp);
    return temp;
  }, init);
  return result;
};


const a = [18, 69, -90, -78, 65, 40];

let r = [18, 3, 3, 3, 1, 1];
let op = operArray(gcdi, a, a[0]);
console.log(op, r);

r = [18, 414, 2070, 26910, 26910, 107640];
op = operArray(lcmu, a, a[0]);
console.log(op, r);

r = [18, 87, -3, -81, -16, 24];
op = operArray(som, a, 0);
console.log(op, r);

r = [18, 18, -90, -90, -90, -90];
op = operArray(mini, a, a[0]);
console.log(op, r);

r = [18, 69, 69, 69, 69, 69];
op = operArray(maxi, a, a[0]);
console.log(op, r);

r = [10, 70, -97, -84, -96, -16];
console.log(operArray(gcdi, r, 10));
