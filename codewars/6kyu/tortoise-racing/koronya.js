// [JS][6kyu] Tortoise racing
// tortoise-racing
// https://www.codewars.com/kata/55e2adece53b4cdcb900006c/train/javascript

const convertTime = (num) => {
  const total = num * 3600;
  const hour = Math.floor(total / 3600);
  const min = Math.floor((total % 3600) / 60);
  const sec = Math.floor((total % 3600) % 60);

  return [hour, min, sec];
};

const race = (v1, v2, g) => {
  if (v1 >= v2) {
    return [-1, -1, -1];
  }

  // g + v1 * time = v2 * time
  // g = v2 * time - v1 * time
  // g = time * (v2 - v1)
  // time = g / (v2 - v1)

  const time = g / (v2 - v1);

  return convertTime(time);
};

race(720, 850, 70);
race(-1, -1, -1);
race(80, 91, 37);
