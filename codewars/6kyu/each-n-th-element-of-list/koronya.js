// [JS][6kyu] Each n-th element of list
// each-n-th-element-of-list
// https://www.codewars.com/kata/5a077e8106d5b654b800004f/train/javascript

const each = (n, xs) => {
  if (n === 0) {
    return []
  }
  const arr = n > 0 ? xs : xs.reverse()
  return arr.filter((_, i) => (i + 1) % n === 0)
}

each(0, [1, 2, 3, 4, 5, 6])
each(1, [1, 2, 3, 4, 5, 6])
each(-1, [1, 2, 3, 4, 5, 6])
each(2, [1, 2, 3, 4, 5, 6])
each(-2, [1, 2, 3, 4, 5, 6])
each(3, [1, 2])
each(-3, [1, 2])
each(5, [1, 2, 3, 4, 5, 6, 7])
each(-5, [1, 2, 3, 4, 5, 6, 7])
