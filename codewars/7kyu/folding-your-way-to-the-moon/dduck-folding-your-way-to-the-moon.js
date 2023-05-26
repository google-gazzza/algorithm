// folding-your-way-to-the-moon
// Folding your way to the moon
// https://www.codewars.com/kata/58f0ba42e89aa6158400000e

const foldTo = (distance) => {
  if (distance >= 0.0001) {
    return Math.ceil(Math.log2(distance * 10000));
  }
  return distance > 0 ? 0 : null;
};



console.log(foldTo(384000000), 42);
console.log(foldTo(0.00001), 0);
