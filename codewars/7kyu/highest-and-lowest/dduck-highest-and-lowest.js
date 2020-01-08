// https://www.codewars.com/kata/554b4ac871d6813a03000035

const highAndLow = (n) => {
  const sortedValues = n.split(' ')
    .sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
  return `${sortedValues[sortedValues.length - 1]} ${sortedValues[0]}`;
};

const numString = '4 5 29 54 4 0 -214 542 -64 1 -3 6 -6';
highAndLow(numString);
//?
//, "542 -214");
