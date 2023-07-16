// [JS][6kyu] What century is it?
// what-century-is-it
// https://www.codewars.com/kata/52fb87703c1351ebd200081f/train/javascript

const whatCentury = (year) => {
  const yearNum = Number(year)
  const centuryNum = Math.ceil(yearNum / 100)
  const centuryStr = String(centuryNum)
  const lastChar = centuryStr[centuryStr.length - 1]
  const lastTwoChars = centuryStr.slice(-2)
  // prettier-ignore
  const suffix =
    lastTwoChars === '11' || lastTwoChars === '12' || lastTwoChars === '13'
      ? 'th'
      : lastChar === '1'
        ? 'st'
        : lastChar === '2'
          ? 'nd'
          : lastChar === '3'
            ? 'rd'
            : 'th'
  return centuryStr + suffix
}

whatCentury('1999') === '20th'
whatCentury('2011') === '21st'
whatCentury('2154') === '22nd'
whatCentury('2259') === '23rd'
whatCentury('1234') === '13th'
whatCentury('1023') === '11th'
whatCentury('2000') === '20th'
