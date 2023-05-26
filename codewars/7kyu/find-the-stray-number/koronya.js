// [JS][7kyu] Find the stray number
// find-the-stray-number
// https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript

const stray = (numbers) => {
  const numbersLen = numbers.length;
  let [first, second] = numbers;
  if (first !== second) {
    return numbers[2] === first ? second : first;
  }

  for (let i = 2; i < numbersLen; i += 1 || 0) {
    const number = numbers[i];
    if (first !== number) {
      return number;
    }
  }
};

stray([1, 1, 2]) === 2;
