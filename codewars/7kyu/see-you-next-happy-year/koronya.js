// [JS][7kyu] See You Next Happy Year
// see-you-next-happy-year
// https://www.codewars.com/kata/5ae7e3f068e6445bc8000046/train/javascript

const nextHappyYear = (year) => {
  let nextYear = year + 1
  while (new Set(nextYear.toString()).size < 4) {
    nextYear += 1
  }
  return nextYear
}

nextHappyYear(1001) === 1023
nextHappyYear(1123) === 1203
nextHappyYear(2001) === 2013
nextHappyYear(2334) === 2340
nextHappyYear(3331) === 3401
nextHappyYear(1987) === 2013
nextHappyYear(5555) === 5601
nextHappyYear(7712) === 7801
nextHappyYear(8088) === 8091
nextHappyYear(8999) === 9012
