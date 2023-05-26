// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
// [JS][8kyu] Opposites Attract
// opposites-attract

const lovefunc = (flower1, flower2) => flower1 % 2 !== flower2 % 2;

lovefunc(1, 4) === true;
lovefunc(2, 2) === false;
lovefunc(0, 1) === true;
lovefunc(0, 0) === false;
