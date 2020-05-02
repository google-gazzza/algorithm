// a-rule-of-divisibility-by-13
// https://www.codewars.com/kata/564057bc348c7200bd0000ff/

const thirt = (n) => {
  const result = String(n).split('').reverse()
    .reduce((a, c, i) => a + (Number(c) * ((10 ** i) % 13)), 0);
  return n === result ? result : thirt(result);
};

console.log(thirt(1234567), 87);
console.log(thirt(8529), 79);
console.log(thirt(85299258), 31);
console.log(thirt(5634), 57);
console.log(thirt(1111111111), 71);
console.log(thirt(987654321), 30);
