// [JS][7kyu] Simple Interest and Compound Interest
// simple-interest-and-compound-interest
// https://www.codewars.com/kata/59cd0535328801336e000649/train/javascript

const interest = (p, r, n) => {
  const a = p * (1 + r * n)
  const b = p * (1 + r) ** n

  return [Number(a.toFixed(0)), Number(b.toFixed(0))]
}

interest(100, 0.1, 1)
interest(100, 0.1, 2)
interest(100, 0.1, 10)
interest(100, 0, 10)
interest(0, 0.1, 10)
interest(100, 0.1, 0)
