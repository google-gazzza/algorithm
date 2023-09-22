// [JS][7kyu] Tidy Number (Special Numbers Series #9)
// tidy-number-special-numbers-series-9
// https://www.codewars.com/kata/5a87449ab1710171300000fd/train/javascript

const tidyNumber = (n) => {
  let prev = Number.MIN_SAFE_INTEGER
  const arr = String(n).split('')
  for (const cur of arr) {
    if (prev > cur) {
      return false
    }
    prev = cur
  }

  return true
}

tidyNumber(12) === true
tidyNumber(102) === false
tidyNumber(9672) === false
tidyNumber(2789) === true
tidyNumber(2335) === true
