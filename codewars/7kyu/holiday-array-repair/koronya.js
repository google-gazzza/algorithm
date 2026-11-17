// [JS][7kyu] Holiday Array Repair
// holiday-array-repair
// https://www.codewars.com/kata/5579906f2f0c0d0766000127/train/javascript

const getHolidayCount = (arr) => arr.filter((item) => typeof item === 'number' && Number.isInteger(item))[0]

const holidayCount = (a1, a2) => {
  const d1 = getHolidayCount(a1)
  const d2 = getHolidayCount(a2)
  if (d1 == null || d2 == null) {
    return 'Not possible'
  }
  if (d1 > d2) {
    return 'Right'
  }
  if (d1 === d2) {
    return 'Same'
  }
  return 'Wrong'
}

holidayCount(['g', 3, 'a'], ['j', 2, 'r']) === 'Right'
holidayCount(['code', 'is', 1.46, 'good', 'I', 'hope', 35], [102, 'and', 'hopefully', 'also', 'this', 'passes']) === 'Wrong'
holidayCount(['code', 'is', 146.7, 'good', 'I', 'hope', 35], [102, 'and', 'hopefully', 'also', 'this', 'passes']) === 'Wrong'
holidayCount([null, 156, 'h'], [156]) === 'Same'
holidayCount([null, 'xxx', undefined, 4], [6]) === 'Wrong'
holidayCount([null, 'xxx', undefined, 8], ['g', 10, NaN]) === 'Wrong'
holidayCount(['g'], ['g', 10]) === 'Not possible'
holidayCount(['x'], ['g', 10]) === 'Not possible'
holidayCount([], ['g', 10]) === 'Not possible'
