// [JS][7kyu] Euclidean distance in n dimensions
// euclidean-distance-in-n-dimensions
// https://www.codewars.com/kata/595877be60d17855980013d3/train/javascript

const euclideanDistance = (point1, point2) => {
  const sum = point1.reduce((acc, p1, i) => acc + (p1 - point2[i]) ** 2, 0)
  const distance = Math.sqrt(sum)
  return Math.round(distance * 100) / 100
}

euclideanDistance([-1], [2]) === 3
euclideanDistance([-1, 2], [2, 4]) === 3.61
euclideanDistance([-1, 2, 5], [2, 4, 9]) === 5.39
