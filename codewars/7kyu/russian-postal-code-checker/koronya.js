// [JS][7kyu] Russian postal code checker
// russian-postal-code-checker
// https://www.codewars.com/kata/552e45cc30b0dbd01100001a/train/javascript

const INVALID_START_NUMBER_STRING_LIST = ['0', '5', '7', '8', '9']
const zipvalidate = (postcode) => {
  if (postcode.length !== 6) {
    return false
  }
  if (!/^\d+$/.test(postcode)) {
    return false
  }
  if (INVALID_START_NUMBER_STRING_LIST.includes(postcode[0])) {
    return false
  }
  return true
}

zipvalidate('198328') === true
zipvalidate('310003') === true
zipvalidate('424000') === true

zipvalidate('056879') === false
zipvalidate('12A486') === false
zipvalidate('a@63') === false
zipvalidate('111') === false
