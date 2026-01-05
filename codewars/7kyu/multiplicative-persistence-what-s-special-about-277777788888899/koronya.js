// [JS][7kyu] Multiplicative Persistence... What's special about 277777788888899?
// multiplicative-persistence-what-s-special-about-277777788888899
// https://www.codewars.com/kata/5c942f40bc4575001a3ea7ec/train/javascript

const per = (n) => {
  if (n < 10) {
    return []
  }
  const result = []
  let num = n
  while (true) {
    const value = String(num)
      .split('')
      .reduce((acc, curr) => Number(acc) * curr, 1)
    result.push(value)
    num = value
    if (value < 10) {
      break
    }
  }
  return result
}

// per(1)
// per(10)
// per(69)
// per(277777788888899)
// per(2379)
