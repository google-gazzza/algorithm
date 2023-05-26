// [JS][5kyu] Primes in numbers
// primes-in-numbers
// https://www.codewars.com/kata/54d512e62a5e54c96200019e/train/javascript

const primeMap = new Map();
primeMap.set(2, true);

const isPrimeNumber = (num) => {
  if (primeMap.has(num)) {
    return primeMap.get(num);
  }

  const rangeNum = Math.floor(Math.sqrt(num));
  if (num % 2 === 0 || num === 1) {
    primeMap.set(num, false);
    return false;
  }
  for (let i = 3; i <= rangeNum; i += 2) {
    if (num % i === 0) {
      primeMap.set(num, false);
      return false;
    }
  }

  primeMap.set(num, true);
  return true;
};

const getNextPrimeNumber = (num) => {
  let flag = true;
  let target = num + 1;
  while (flag) {
    if (isPrimeNumber(target)) {
      return target;
    }
    target += 1;
  }
};

const primeFactors = (n) => {
  const resultMap = new Map();
  let target = n;
  let primeTarget = 2;
  while (target > 1 && primeTarget <= target) {
    if (target % primeTarget === 0) {
      target /= primeTarget;
      resultMap.set(primeTarget, (resultMap.get(primeTarget) || 0) + 1);
    } else {
      primeTarget = getNextPrimeNumber(primeTarget);
    }
  }

  return [...resultMap]
    .map((item) => {
      const [prime, count] = item;
      const result = count > 1 ? `**${count}` : "";
      return `(${prime}${result})`;
    })
    .reduce((acc, cur) => acc + cur, "");
};

// primeFactors(1)
// primeFactors(32)
// primeFactors(96)
// primeFactors(86240)
// primeFactors(78354)
// primeFactors(4973909)
