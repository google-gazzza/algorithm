// [JS][7kyu] Invisible cubes
// invisible-cubes
// https://www.codewars.com/kata/560d6ebe7a8c737c52000084/train/javascript

const notVisibleCubes = (n) => {
  if (n < 3) {
    return 0
  }
  return (n - 2) ** 3
}

notVisibleCubes(0) === 0
notVisibleCubes(1) === 0
notVisibleCubes(2) === 0
notVisibleCubes(3) === 1
notVisibleCubes(5) === 27
