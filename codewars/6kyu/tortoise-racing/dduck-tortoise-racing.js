// tortoise-racing
// https://www.codewars.com/kata/55e2adece53b4cdcb900006c/train/javascript

const race = (v1, v2, g) => {
  if (v1 >= v2) {
    return null;
  }
  
  const time = (g / (v2 - v1));
  return [Math.floor(time), Math.floor(time * 60 % 60), Math.floor(time * 3600 % 60)];
};


console.log(race(720, 850, 70), [0, 32, 18]);
console.log(race(80, 91, 37), [3, 21, 49]);
console.log(race(80, 100, 40), [2, 0, 0]);
