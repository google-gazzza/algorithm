// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
// [JS][7kyu] Square Every Digit
// square-every-digit

const squareDigits = (num) => {
  let result = "";
  for (const s of String(num)) {
    result += s * s;
  }

  return Number(result);
};

squareDigits(3212) === 9414;

squareDigits(2112) === 4114;

squareDigits(0) === 0;
