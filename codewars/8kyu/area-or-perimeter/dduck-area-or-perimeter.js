// https://www.codewars.com/kata/5ab6538b379d20ad880000ab

const areaOrPerimeter = (l, w) => {
  if (l === w) {
    return l ** 2;
  }
  return (l + w) * 2;
};

console.log(areaOrPerimeter(4, 4), 16);
console.log(areaOrPerimeter(6, 10), 32);
