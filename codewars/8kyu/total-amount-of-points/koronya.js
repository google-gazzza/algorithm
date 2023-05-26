// [JS][8kyu] Total amount of points
// https://www.codewars.com/kata/5bb904724c47249b10000131

const points = (games) => {
  return games.reduce((acc, cur) => {
    const [x, y] = cur.split(":").map((item) => Number(item));
    return acc + (x > y ? 3 : x === y ? 1 : 0);
  }, 0);
};
