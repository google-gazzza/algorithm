// [JS][7kyu] Cat Years, Dog Years (2)
// cat-years-dog-years-2
// https://www.codewars.com/kata/5a6d3bd238f80014a2000187/train/javascript

const getCatAge = (years) => {
  if (years < 15) {
    return 0
  }
  if (15 <= years && years < 24) {
    return 1
  }
  if (24 <= years && years < 28) {
    return 2
  }
  return Math.floor(2 + (years - 24) / 4)
}

const getDogAge = (years) => {
  if (years < 15) {
    return 0
  }
  if (15 <= years && years < 24) {
    return 1
  }
  if (24 <= years && years < 29) {
    return 2
  }
  return Math.floor(2 + (years - 24) / 5)
}

const ownedCatAndDog = (catYears, dogYears) => [getCatAge(catYears), getDogAge(dogYears)]

ownedCatAndDog(15, 15)
ownedCatAndDog(24, 24)
ownedCatAndDog(56, 64)
ownedCatAndDog(9, 7)
ownedCatAndDog(24, 24)
