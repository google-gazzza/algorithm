// [JS][7kyu] Cartesian coordinates from degree angle
// cartesian-coordinates-from-degree-angle
// https://www.codewars.com/kata/555f43d8140a6df1dd00012b/train/javascript

const coordinates = (degrees, radius) => {
  const radians = (degrees * Math.PI) / 180
  const x = radius * Math.cos(radians)
  const y = radius * Math.sin(radians)
  return [x, y]
}

coordinates(90, 1)
coordinates(90, 2)
coordinates(0, 1)
coordinates(45, 1)
coordinates(1090, 10000)
coordinates(-270, 1)
