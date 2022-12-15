// [JS][7kyu] Deodorant Evaporator
// deodorant-evaporator
// https://www.codewars.com/kata/5506b230a11c0aeab3000c1f/train/javascript

const evaporator = (content, evap_per_day, threshold) => {
  let count = 0;
  let target = content;
  let limit = (content * threshold) / 100;
  while (target > limit) {
    target = (target * (100 - evap_per_day)) / 100;
    count += 1;
  }

  return count;
};

evaporator(10, 10, 5);
evaporator(10, 10, 10);
