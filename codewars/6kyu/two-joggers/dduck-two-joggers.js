// two-joggers
// Two Joggers
// https://www.codewars.com/kata/5274d9d3ebc3030802000165

const primeFactorization = (x) => {
  const map = new Map();
  let divisor = 2;
  
  while (divisor <= x) {
    if (x % divisor === 0) {
      map.set(divisor, (map.get(divisor) || 0) + 1);
      x /= divisor;
    } else {
      divisor += 1;
    }
  }
  
  return map;
};

const leastCommonMultiple = (a, b) => {
  const factors = new Map();
  primeFactorization(a).forEach((v, key) => factors.set(key, factors.get(key) > v ? factors.get(key) : v));
  primeFactorization(b).forEach((v, key) => factors.set(key, factors.get(key) > v ? factors.get(key) : v));
  
  return [...factors.entries()].reduce((acc, cur) => acc * (cur[0] ** cur[1]), 1);
};

const nbrOfLaps = (x, y) => {
  const lcm = leastCommonMultiple(x, y);
  return [
    lcm / x,
    lcm / y
  ];
};


// test code
console.log(nbrOfLaps(5, 3), [3, 5]);
console.log(nbrOfLaps(4, 6), [3, 2]);
console.log(nbrOfLaps(5, 5), [1, 1]);
console.log(nbrOfLaps(13, 18), [1, 1]);


// best practice on codewars
function gcd(a, b) {
  if(b == 0)
    return a;
  return gcd(b, a % b);
}

var nbrOfLaps = function (x, y) {
  var lcm = (x*y)/ gcd(x,y);
  return [lcm/x, lcm/y];
}
