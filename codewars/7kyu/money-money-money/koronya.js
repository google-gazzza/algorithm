// [JS][7kyu] Money, Money, Money
// money-money-money
// https://www.codewars.com/kata/563f037412e5ada593000114/train/javascript

const calculateYears = (principal, interest, tax, desired) => {
  let target = principal;
  let count = 0;
  while (target < desired) {
    target += target * interest * (1 - tax);
    count += 1;
  }

  return count;
};

calculateYears(1000, 0.05, 0.18, 1100);
calculateYears(1000, 0.01625, 0.18, 1200);
calculateYears(1000, 0.05, 0.18, 1000);
