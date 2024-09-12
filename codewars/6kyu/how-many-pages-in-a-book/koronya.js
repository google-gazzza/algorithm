// [JS][6kyu] How many pages in a book?
// how-many-pages-in-a-book
// https://www.codewars.com/kata/622de76d28bf330057cd6af8/train/javascript

const getCount = (n) => {
  if (n < 10) {
    return n
  }
  if (n < 100) {
    return 2 * n - 1 * 9
  }
  if (n < 1000) {
    return 3 * n - 2 * 9 - 1 * 90
  }
  if (n < 10000) {
    return 4 * n - 3 * 9 - 2 * 90 - 1 * 900
  }
  if (n < 100000) {
    return 5 * n - 4 * 9 - 3 * 90 - 2 * 900 - 1 * 9000
  }
  if (n < 1000000) {
    return 6 * n - 5 * 9 - 4 * 90 - 3 * 900 - 2 * 9000 - 1 * 90000
  }
}

const amountOfPages = (summary) => {
  let start = 0
  let end = summary
  let mid = Math.floor((start + end) / 2)
  while (start < end) {
    if (getCount(mid) < summary) {
      start = mid + 1
    } else {
      end = mid
    }
    mid = Math.floor((start + end) / 2)
  }
  return mid
}

amountOfPages(5) === 5
amountOfPages(25) === 17
amountOfPages(1095) === 401
amountOfPages(185) === 97
amountOfPages(660) === 256
