// [JS][6kyu] Calculate the area of a regular n sides polygon inside a circle of radius r
// calculate-the-area-of-a-regular-n-sides-polygon-inside-a-circle-of-radius-r
// https://www.codewars.com/kata/5a58ca28e626c55ae000018a/train/javascript

const areaOfPolygonInsideCircle = (circleRadius, numberOfSides) => {
  const result = (circleRadius ** 2 * numberOfSides * Math.sin((2 * Math.PI) / numberOfSides)) / 2
  return Number(result.toFixed(3))
}

areaOfPolygonInsideCircle(3, 3)
areaOfPolygonInsideCircle(2, 4)
areaOfPolygonInsideCircle(2.5, 5)
