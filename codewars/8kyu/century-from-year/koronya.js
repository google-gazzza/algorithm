// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript
// [JS][8kyu] Century From Year
// century-from-year

const century = (year) => {
  const candidate = Math.floor(year / 100);
  return year % 100 === 0 ? candidate : candidate + 1;
};

century(1705) === 18;
century(1900) === 19;
century(1601) === 17;
century(2000) === 20;
century(89) === 1;
